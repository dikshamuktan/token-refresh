import mongoose  from "mongoose";
 
const tokenSchema = mongoose.Schema(
    {
        token:{
            type:String,
        },
        user:{
           type:mongoose.Types.ObjectId,
           ref:"user",
           require: true,
        },
    },
    {timestamp: true}

);

const tokenModel = mongoose.model("token", tokenSchema);
export default tokenModel;