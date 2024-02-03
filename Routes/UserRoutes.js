const express=require('express')
const userRouter=express.Router()
const userController=require('../Controllers/UserController')
const userAuthMiddleWare= require('../Middlewares/UserAuthMiddleware')
userRouter.post('/register',userController.RegisterUser)
userRouter.post('/login',userController.LoginUser)
userRouter.get('/getUserName',userAuthMiddleWare.userController.DisplayUserName)
userRouter.post('/addCourse',userAuthMiddleWare.userController.AddCourse)
userRouter.get('/getCourseData',userAuthMiddleWare.userController.DisplayCourseData)
userRouter.put('/editCourse',userAuthMiddleWare.userController.EditCourseData)
userRouter.delete('/deleteCoures',userAuthMiddleWare.userController.DeleteCourseData)

module.exports=userRouter