import mongoose from "mongoose";


const userSchema = mongoose.Schema(
    {
        name:{
            type:String,
        },
        email:{
           type:String,
        },
    },
    {timestamp:true},
);

const userModel = mongoose.model("user",userSchema);
export default userModel;