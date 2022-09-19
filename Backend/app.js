const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const cookieParser=require("cookie-parser")
const port = 5000; 
const settingRouter=require('./routes/settingRoutes')
const sliderRouter=require('./routes/SliderRoutes')
const photosRouter=require('./routes/photosRoutes')
const cardRouter=require('./routes/cardRoutes')
const instagramRouter=require('./routes/instagramRoutes')
const logoRouter=require('./routes/LogoRoutes')
const messageRouter=require('./routes/messageRoute')
const adressRouter=require('./routes/adressRouter')
const fagsRouter=require('./routes/fagsRouter')

const app = express();


// app.use(cors())
const corsConfig = {
    credentials: true,
    origin: true,
};
app.use(cors());
app.use(express.json())
app.use(cookieParser())
app.use('/setting',settingRouter)
app.use('/slider',sliderRouter)
app.use('/photos',photosRouter)
app.use('/card',cardRouter)
app.use('/instagram',instagramRouter)
app.use('/logo',logoRouter)
app.use('/message',messageRouter)
app.use('/adress',adressRouter)
app.use('/fags',fagsRouter)

mongoose.connect(`mongodb+srv://Laman:rBd8q8Tq2iwWIUZC@cluster0.m9czfiv.mongodb.net/FinalProject?retryWrites=true&w=majority`)
.then(() => console.log('Connect Database...!'))
.then(() => {
    app.listen(port)
})
.catch((err) => console.log(err))

