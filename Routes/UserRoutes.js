const express=require('express')
const userRouter=express.Router()
const userController=require('../Controllers/UserController')
const userAuthMiddleWare= require('../Middlewares/UserAuthMiddleware')
const upload=require('../Config/multer')
userRouter.post('/register',userController.RegisterUser)
userRouter.post('/login',userController.LoginUser)
userRouter.get('/getUserName',userAuthMiddleWare,userController.DisplayUserName)
userRouter.post('/addCourse', upload.upload.single("image"),userAuthMiddleWare,userController.AddCourse)
userRouter.get('/getCourseData',userAuthMiddleWare,userController.DisplayCourseData)
userRouter.put('/editCourse/:id',userAuthMiddleWare,userController.EditCourseData)
userRouter.delete('/deleteCoures/:id',userAuthMiddleWare,userController.DeleteCourseData)

module.exports=userRouter






