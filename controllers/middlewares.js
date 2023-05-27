const jwt=require('jsonwebtoken');

//this middleware decodes the token created after login
let DecodeUser = (req , res , next)=>{
    let token = req.headers["authorization"].split(" ")[1];;
     
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

//middleware to verify the student
let CheckIfStudent = (req , res , next)=>{
    
    if(req.decoded.role == "student"){
        next();
    }else{
        res.status(403).json({"Message":"Not Authorized as Student"})
    }
}

//middleware to verify the admin
let CheckIfAdmin = (req , res , next)=>{
    
    if(req.decoded.role == "admin" ){
        next();
    }else{
        res.status(403).json({"Message":"Not Authorized as Admin"})
    }
}

//middleware to verify the admin or instructor (any of these can be authorized to perform)
let CheckIfAdminorInstructor = (req , res , next)=>{
    
    if(req.decoded.role == "instructor" ||req.decoded.role == "instructor"){
        next();
    }else{
        res.status(403).json({"Message":"Not Authorized as Admin"})
    }
}
module.exports = {
    CheckIfStudent,
    CheckIfAdmin,
    CheckIfAdminorInstructor,
    DecodeUser
}