import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import Url from './config.js';
import User from './Models/userModel.js'
import env from 'dotenv';
import Product from './Models/productsModel.js'
env.config();


const app = express();
const port = process.env.PORT || 8000

app.use(express.json())
app.use(cors())


mongoose.connect(Url);

app.get('/', (req, res) => {
  res.send('hello')

})

app.post('/register', async (req, res) => {

  let user = new User(req.body)
  let result = await user.save()
  console.log(result)
  res.send(result)

})

app.post('/login', async (req, res) => {
  const user = await User.findOne(req.body)
  if (user) {
    res.send(user)
  } else {
    console.log('no user found')
  }
})


app.post('/add-products', async (req, res) => {
  const product = await new Product(req.body)
  const allProduct = product.save()
  console.log(allProduct)
  res.send(allProduct)
})

app.get('/get-products',async(req,res)=>{
  const products = await Product.find()
  if(products){
    res.send(products)
  }else{
    console.log('products not found')
  }
})

app.delete('/delete/:id', async(req,res)=>{
  const deleteOne = await Product.deleteOne({_id: req.params.id})
  res.send(deleteOne)
  console.log(deleteOne)
})


app.listen(port, () => {
  console.log(`Server runing on local host ${port}`)
})