import mongoose from "mongoose";

const userSchema= mongoose.Schema({
    name:{
        type: String,
        required: [true,"name is required"]
    },
    phone:{
        type:Number,
        required:[true,"Phone Number is required"],
        unique:true
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true
    },
    userName: {
        type: String,
        required: [true, "UserName is Required"],
        unique: true,
      },
      photo: {
       type: String,
        required: [true, "Photo is Required"],
      },
      password: {
        type: String,
        required: [true, "Password is Required"],
      },
})

export default mongoose.models?.users||mongoose.model('users',userSchema)