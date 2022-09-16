const Message=require('../model/messageSchema')


const getAllMessagess=async(req,res,next)=>{
    let messagess;
    try {
        messagess=await Message.find()
    } catch (error) {
        console.log(error);
    }
    if(!messagess){
        return res.status(404).json({message:'No instagrams found..!'})
    }
    else{
        return res.status(200).json({messagess})
    }
}

const addMessage=async(req,res,next)=>{
    const{email,message} = req.body;
    let messages;
    try {
        messages=new Message({
            email,
            message
        })
        await messages.save();
    } catch (error) {
        console.log(error);
    }
    if(!messages){
        return res.status(500).json({message:'Unable to Add..!'})
    }
    else{
        return res.status(201).json({messages})
    }
}

const getById=async(req,res,next)=>{
    const id=req.params.id;
    let message;
    try {
        message=await Message.findById(id)
    } catch (error) {
        console.log(error);
    }
    if(!message){
        return res.status(404).json({message:'No instagram found..!'})
    }
    else{
        return res.status(200).json({message})
    }
}

const deleteMessage=async(req,res,next)=>{
    const id=req.params.id;
    let messages;
    try {
        messages=await Message.findByIdAndDelete(id)
    } catch (error) {
        console.log(error);
    }
    if(!messages){
        return res.status(404).json({message:'Unable to delete..!'})
    }
    else{
        return res.status(200).json({messages})
    }
}


exports.getAllMessagess=getAllMessagess
exports.addMessage=addMessage;
exports.getById=getById;
exports.deleteMessage=deleteMessage;