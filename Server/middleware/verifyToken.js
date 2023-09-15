const jwt = require('jsonwebtoken');


const verifyToken = (req,res,next)=>{

    try {

        let token = req.header('Authorization');
        if(!token) return res.status(400).json({msg: 'Access Denied'});

        if(token.startsWith('Bearer ')){
            token = token.slice(7,token.length).trimLeft();
        }

        const verifiedUser = jwt.verify(token,process.env.SECRET_TWT);
        req.user = verifiedUser
        next()
        
    } catch (error) {
        res.status(400).json(error)
    }

}

module.exports = {verifyToken}