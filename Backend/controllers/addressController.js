const Adress=require('../model/adressSchema')

const getAlladress=async(req,res,next)=>{
    let adress;
    try {
        adress=await Adress.find()
    } catch (error) {
        console.log(error);
    }
    if(!adress){
        return res.status(404).json({message:'No adress found..!'})
    }
    else{
        return res.status(200).json({adress})
    }
}

const updateAdress = async (req,res,next) => {
    const id = req.params.id;
    const {adress,phone,mail} = req.body;
    let adresses;
    try {
        adresses = await Adress.findByIdAndUpdate(id, {
            adress,
            phone,
            mail
        })
        adresses = await adresses.save();
    } 
    catch (error) {
        console.log(error);
    }
    if(!adresses) {
        return res.status(404).json({message: 'Unable to Updated by this id...!'})
    }
    else{
        return res.status(200).json({adresses})
    }
}

const getById=async(req,res,next)=>{
    const id=req.params.id;
    let adresses;
    try {
        adresses=await Adress.findById(id)
    } catch (error) {
        console.log(error);
    }
    if(!adresses){
        return res.status(404).json({message:'No adress found..!'})
    }
    else{
        return res.status(200).json({adresses})
    }
}

exports.getAlladress=getAlladress;
exports.updateAdress=updateAdress;
exports.getById=getById;
