const User = require('../models/user'); 

async function handleGetAllUser(req, res)  {
    const allDbUser = await User.find({});
    return res.json(allDbUser);
}

async function handleUserById(req, res){
    const user = await User.findById(req.params.id);
    if(!user) return res.status(404).json({error: "User not found"});
    return res.json(user);
}

async function handleCreateUser(req, res){
    const body = req.body;

    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
        return res.status(400).json({message: "All Fields are required"});
    }

   const result = await User.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        gender: body.gender,
        job_title: body.job_title
    })

    console.log("result",result);
    return res.status(201).json({message: 'User Created'})
}


async function handleUpdateUserById(req, res){
    await User.findByIdAndUpdate(req.params.id, {
        last_name:req.body.last_name
    })
    console.log(req.body);
    return res.json({status : "User Updated Successfully"});
}

async function handleDeleteUserById(req ,res){
    await User.findByIdAndDelete(req.params.id);
    return res.json({status : "User deleted Successfully"});
}

module.exports ={
    handleGetAllUser,
    handleUserById,
    handleCreateUser,
    handleUpdateUserById,
    handleDeleteUserById
}