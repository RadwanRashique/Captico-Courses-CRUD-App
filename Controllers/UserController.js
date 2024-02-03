const UserModel=require('../Model/UserModel')
const CourseModel=require('../Model/CourseModel')

const RegisterUser=async(req,res)=>{
    try{

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