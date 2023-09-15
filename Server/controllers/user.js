const User = require('../models/user');


const getUser = async(req,res)=>{

    try {
        
        let user = req.user;
        let userData = await User.findById(user.id);
        delete userData.Password
        res.status(200).json({userData})

    } catch (error) {
        res.status(500).json(error)        
    }
    
}


module.exports = {getUser}