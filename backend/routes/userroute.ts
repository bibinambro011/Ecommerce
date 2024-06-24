import express from 'express';
import { usercontroller } from '../controller/usercontroller';

const router=express.Router()
const userController=new usercontroller()

router.post("/signup",userController.signup)


export default router