import User from "@/models/user";
import dbConnect from "@/config/dbConnect";

export default async function handler(req,res){
    dbConnect()
    try {
        if(!req?.body?.password){
            res.status(400).json({
                success:false,
                message:"Enter Your Password"
            })
        }
        const user = await User.create({...req.body})
        res.status(200).json({
            success:true,
            message:user
        })
    } catch (error) {
        if(error.code===11000){
            if(error.keyPattern?.email){
                res.status(409).json({
                    success:false,
                    message:"Email Already Being use"
                })
            }
            if(error.keyPattern?.phone){
                res.status(409).json({
                    success:false,
                    message:"Phone number already being used"
                })
            }
            if(error.keyPattern?.userName){
                res.status(409).json({
                    success:false,
                    message:"username already exist"
                })
            }
            return;
        }
        res.status(500).json({
            success:false,
            message:"Something Want Wrong"
        })
    }
}