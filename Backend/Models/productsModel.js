import mongoose from "mongoose";

const productsSchema = mongoose.Schema({
    productName:String,
    model:String,
    price:String
})

export default mongoose.model('products', productsSchema)