const jwt=require('jsonwebtoken')


const userAuth=(req,res,next)=>{

    try{
        const authHeader = req.headers['authorization'];
    
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: "Authentication failed", success: false });
        }

        const token = authHeader.split(' ')[1].trim();

        if(!token){
         return   res.status(401).json({message:"Authantication failed",success:false})
        }
        const decoded=  jwt.verify(token,process.env.SECRET)
    
       
         req.userId=decoded.UserId
         next()

    }
    catch(error){
        console.error(error)
        res.status(401).json({message:"Invalid user AuthenticationFailed",success:false})
    }
}

module.exports =userAuth