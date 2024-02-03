const express=require('express')
const userRouter=express.Router()
const userController=require('../Controllers/UserController')
userRouter.post('/register',userController.RegisterUser)
userRouter.post('/login',userController.LoginUser)
userRouter.get('/getUserName',userController.DisplayUserName)
userRouter.post('/addCourse',userController.AddCourse)
userRouter.get('/getCourseData',userController.DisplayCourseData)
userRouter.put('/editCourse',userController.EditCourseData)
userRouter.delete('/deleteCoures',userController.DeleteCourseData)

module.exports=userRouter