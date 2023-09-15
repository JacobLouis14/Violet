const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user')


/* Register Controller */
const register = async(req,res)=>{
    try {
        
        const {
            Name,
            MobileNo,
            Email,
            Password,
            SavedEvents,
        } = req.body

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(Password,salt);

        const newUser = new User({
            Name,
            MobileNo,
            Email,
            Password: passwordHash,
            SavedEvents,
        })

        const savedUser = await newUser.save();
        res.status(200).json(savedUser)

    } catch (error) {
        res.status(500).json(error.message)
    }
}

/*Login Controller */
const login = async(req,res)=>{

    try {
            const {Email,Password} = req.body;

        let user = await User.findOne({Email: Email});
        if(!user) return res.status(400).json({msg: 'User Not Exist'});

        let isMatch = await bcrypt.compare(Password,user.Password);
        if(!isMatch) return res.status(400).json({msg: 'Invalid Credentials'});

        const token = jwt.sign({id:user.id},process.env.SECRET_TWT);
        delete user.Password;
        res.status(200).json({user,token})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }

}






module.exports= {register,login}