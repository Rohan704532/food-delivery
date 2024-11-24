import mongoose from "mongoose";

export const connectDb = async()=>{
    await mongoose.connect("mongodb+srv://rohan704532:o8WschySQxIW7To0@cluster0.2kzwt.mongodb.net/food-del")
    .then(()=>console.log("DB connected"))
    .catch((error)=>console.log(error))
}