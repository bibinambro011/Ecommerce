import { userservice } from "../services/userservice";
import { Request, Response } from 'express';


const userService=new userservice()

export class usercontroller{
    async signup(req:Request,res:Response){
        console.log(req.body);
        console.log("request came")
        res.status(200).json(req.body);


    }
}