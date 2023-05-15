let DecodeUser = (req , res , next)=>{
    let token = req.body.token;
     
    jwt.verify(token , process.env.SECRET_KEY , (err , decoded)=>{
        if(!err){
            
            req.decoded = decoded;
            
            next();
        }else{
            res.status(403).json({token:token, message:"Not Authorized"})
        }
    }
    )
}


let CheckIfStudent = (req , res , next)=>{
    
    if(req.decoded.role == "student"){
        next();
    }else{
        res.status(403).json({"Message":"Not Authorized as Student"})
    }
}

let CheckIfAdmin = (req , res , next)=>{
    
    if(req.decoded.role == "admin"){
        next();
    }else{
        res.status(403).json({"Message":"Not Authorized as Admin"})
    }
}

let CheckIfInstructor = (req , res , next)=>{
    
    if(req.decoded.role == "instructor"){
        next();
    }else{
        res.status(403).json({"Message":"Not Authorized as Admin"})
    }
}
module.exports = {
    CheckIfStudent,
    CheckIfAdmin,
    CheckIfInstructor,
    DecodeUser
}