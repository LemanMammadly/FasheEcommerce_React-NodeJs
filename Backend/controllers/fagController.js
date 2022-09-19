const Fag=require("../model/fagSchema")


const getAllFags=async(req,res,next)=>{
    let fags;
    try {
        fags=await Fag.find()
    } catch (error) {
        console.log(error);
    }
    if(!fags){
        return res.status(400).json({message:"No fags found..!"})
    }
    else{
        return res.status(200).json({fags})
    }
}

const addFags=async(req,res,next)=>{
    const{question,answer,fag_id}=req.body;
    let fag;
    try {
        fag=new Fag({
            question,
            answer,
            fag_id
        })
        await fag.save()
    } catch (error) {
        console.log(error);
    }
    if(!fag){
        return res.status(500).json({message:"No fags add..!"})
    }
    else{
        return res.status(201).json({fag})
    }
}

const getById=async (req,res,next)=>{
    const id=req.params.id;
    let fag;
    try {
        fag=await Fag.findById(id)
    } catch (error) {
        console.log(error);
    }
    if(!fag){
        return res.status(404).json({message:"Not founds fag..!"})
    }
    else{
        return res.status(200).json({fag})
    }
}


const updateFags=async(req,res,next)=>{
    const id=req.params.id;
    const{question,answer,fag_id}=req.body;
    let fags;
    try {
        fags=await Fag.findByIdAndUpdate(id,{
            question,
            answer,
            fag_id
        })
        fags=await fags.save();
    } catch (error) {
        console.log(error);
    }
    if(!fags){
        return res.status(404).json({message:"Unable to update..!"})
    }
    else{
        return res.status(200).json({fags})
    }
}


const deleteFag=async(req,res,next)=>{
    const id=req.params.id;
    let fag;
    try {
        fag=await Fag.findByIdAndDelete(id)
    } catch (error) {
        console.log(error);
    }
    if(!fag){
        return res.status(404).json({message:"Unable to delete..!"})
    }
    else{
        return res.status(200).json({fag})
    }
}


exports.getAllFags=getAllFags;
exports.addFags=addFags;
exports.getById=getById;
exports.updateFags=updateFags;
exports.deleteFag=deleteFag;