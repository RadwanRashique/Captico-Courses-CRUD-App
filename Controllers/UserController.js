const UserModel=require('../Model/UserModel')
const CourseModel=require('../Model/CourseModel')
const cloudinary=require('cloudinary')
const jwt= require('jsonwebtoken')
const bcrypt=require('bcrypt')

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
          name:username,
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

    }
    catch(error){
        console.error(error,"at LoginUser")
        res.status(500).json({message:"Internal server error",success:false})
    }
}



const DisplayUserName=async(req,res)=>{
    try{

    }
    catch(error){
        console.error(error,"at DisplayUserName")
        res.status(500).json({message:"Internal server error",success:false})
    }
}



const AddCourse=async(req,res)=>{
    try{

    }
    catch(error){
        console.error(error,"at AddCourse")
        res.status(500).json({message:"Internal server error",success:false})
    }
}



const DisplayCourseData=async(req,res)=>{
    try{

    }
    catch(error){
        console.error(error,"at DisplayCourseData")
        res.status(500).json({message:"Internal server error",success:false})
    }
}

const EditCourseData=async(req,res)=>{
    try{

    }
    catch(error){
        console.error(error,"at EditCourseData")
        res.status(500).json({message:"Internal server error",success:false})
    }
}


const DeleteCourseData=async(req,res)=>{
    try{

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