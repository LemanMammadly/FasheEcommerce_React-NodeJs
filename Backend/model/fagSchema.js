const mongoose=require('mongoose')

const fagSchema=new mongoose.Schema({
    answer:{
        type:String,
        required:true
    },
    question:{
        type:String,
        required:true
    },
    fag_id:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('Fag',fagSchema)