import usersModel from "../models/usermodel"

export class userrepository{
      async signup(userdata:any){
        let data=await usersModel.create(userdata);
        return data
    }
}