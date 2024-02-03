const UserModel=require('../Model/UserModel')
const CourseModel=require('../Model/CourseModel')
const cloudinary=require('cloudinary')
const jwt= require('jsonwebtoken')
const bcrypt=require('bcrypt')
const courseModel = require('../Model/CourseModel')

const RegisterUser=async(req,res)=>{
    try{

        const {name,email,phone,password}=req.body
        const ExistingEmail= await UserModel.findOne({email:email})
        if(ExistingEmail){
            // status code 400 bad request
         return res.status(200).json({message:"You Already Have An Account",success:false})
        }
  
        const SecurePassword= await  bcrypt.hash(password,10)
        console.log(SecurePassword)
  
        const Data=  new UserModel({
          name,
          email,
          password:SecurePassword,
          phone
        })
         await  Data.save()
        return  res.status(201).json({message:"successfully Registerd",success:true})
    }
    catch(error){
        console.error(error,"error at RegisterUser")
         res.status(500).json({message:"Internal server error ",success:false})
    }
}


const LoginUser=async(req,res)=>{
    try{

        const {email,password}=req.body
      
        const Emailcheck= await UserModel.findOne({email:email})
        if(!Emailcheck){
            // status code 404 badrequest
         return    res.status(200).json({message:"user Not found Check The Mail",success:false})
        }

        const passwordVerify= await bcrypt.compare(password,Emailcheck.password)
        if(!passwordVerify){
          return   res.status(200).json({message:"password Incorrect",success:false})
        }
      
     const token=  jwt.sign({UserId:Emailcheck._id},process.env.SECRET,{expiresIn:'1d'})
        return  res.status(200).json({message:"Successfully Loged-In",success:true,token:token})
    }
    catch(error){
        console.error(error,"at LoginUser")
        res.status(500).json({message:"Internal server error",success:false})
    }
}



const DisplayUserName=async(req,res)=>{
    try{

        const userId= req.userId
        const Data= await UserModel.findById(userId)
       const username=Data.name
      
      return  res.status(200).json({success:true,userName:username})
    }
    catch(error){
        console.error(error,"at DisplayUserName")
        res.status(500).json({message:"Internal server error",success:false})
    }
}



const AddCourse=async(req,res)=>{
    try{

        
const {courseName,courseImage,courseDescription,price}=req.body

 const CourseModel= new ({

    courseName,
    courseImage,
    courseDescription,
    price
 })

   await  CourseModel.save()
       res.status(201).json({message:"course Successfully Added",success:true})

    }
    catch(error){
        console.error(error,"at AddCourse")
        res.status(500).json({message:"Internal server error",success:false})
    }
}



const DisplayCourseData=async(req,res)=>{
    try{
      
        const courseData= await courseModel.find()
        
        res.status(200).json({success:true,courseData:courseData})
    }
    catch(error){
        console.error(error,"at DisplayCourseData")
        res.status(500).json({message:"Internal server error",success:false})
    }
}

const EditCourseData=async(req,res)=>{
    try{
        const courseId = req.params.id;
        const updatedFields = req.body;

        // Constructing the update object dynamically
        const updateObject = {};
        for (const key in updatedFields) {
            updateObject[key] = updatedFields[key];
        }

        const updatedCourse = await courseModel.findOneAndUpdate(
            { _id: courseId },
            { $set: updateObject },
            { new: true } 
        );

        res.status(200).json({ message: "Task Successfully Updated", success: true });
    }
    catch(error){
        console.error(error,"at EditCourseData")
        res.status(500).json({message:"Internal server error",success:false})
    }
}


const DeleteCourseData=async(req,res)=>{
    try{
        const courseId= req.params.id
        await courseModel.findByIdAndDelete(courseId)
     return   res.status(200).json({message:"Course Successfully deleted",success:true})

    }
    catch(error){
        console.error(error,"at DeleteCourseData")
        res.status(500).json({message:"Internal server error",success:false})
    }
}

module.exports={
    RegisterUser,
    LoginUser,
    DisplayUserName,
    AddCourse,
    DisplayCourseData,
    EditCourseData,
    DeleteCourseData
}