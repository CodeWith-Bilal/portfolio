import mongoose from "mongoose";

function dbConnect(){
if(mongoose.connection.readyState>=1){
    return
}else{
    mongoose.connect(process.env.DB_URL)
}
}
export default dbConnect