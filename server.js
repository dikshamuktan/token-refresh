import express from"express";
import jwt from "jsonwebtoken";
import { v4 } from "uuid";
import mongoose from "mongoose";
import userModel from "./model/user.model.js";
import tokenModel from "./model/token.model.js";

const app = express();

app.use (express.json());

const validateUser = (req,res,next) => {
    try{
        const authToken= req.headers["authorization"];
        if (!authToken) throw new Error("token not found ")
        const accessToken = authToken.split(" ")[1];
        const verifyToken = jwt.verify(accessToken,"abcd");
        if (verifyToken) return next();
        throw new Error("log in required");
    }catch (err){
     res.json({msg:"err"});
    }
};


app.post("/", validateUser, async (req, res) => {
    res.json("token validated");
  });

app.post("/register", async (req,res)=>{
  const addUser= await userModel.create(req.body);
  res.json(addUser);
});

app.get("/user", async (req,res)=>{
  const list= await userModel.find(req.body);
  res.json(list);
});

app.post("/login",async (req ,res) => {
  try{
    const email = req.body.email;
    const userFind = await userModel.findOne({email:email});
    if (!userFind) throw new Error("user not found");
    const accessToken = jwt.sign({_id:userFind._id},"abcd",{
        expiresIn:"1m",
        issuer:"np",
    });
    const newRefreshToken= v4();
    await tokenModel.findOneAndUpdate(
        {user: userFind.user},
        {$set: {token: newRefreshToken} },
        {upsert:true}
    );
    res.json({ accessToken, refreshToken: newRefreshToken});
  }catch(err){
    console.log(err)
    res.json({msg:"err"});
  }
});

app.post("/hydrate-token", async (req, res) => {
    try {
      const refreshToken = req.body.refreshToken;
      const checkTokenExist = await tokenModel.findOne({ token: refreshToken });
      if (!checkTokenExist) throw new Error("Token doesnot exist!");
      const accessToken = jwt.sign({ _id: checkTokenExist.user }, "abcd", {
        expiresIn: "1m",
        issuer: "np",
      });
      const newRefreshToken = v4();
      await tokenModel.findOneAndUpdate(
        { user: checkTokenExist.user },
        { $set: { token: newRefreshToken } }
      );
      res.json({ accessToken, refreshToken: newRefreshToken });
    } catch (err) {
      console.log(err)
      res.json({ msg: "err" });
    }
  });



mongoose
  .connect("mongodb://localhost:27017/refresh-token-db")
  .then(() => {
    console.log("Db connected...");
  })
  .catch((err) => {
    console.log(err);
  });


app.listen (3000,() => {
    console.log("server running at 3000");

});


