import { userrepository } from "../repositories/userreopository";


const userrepo=new userrepository()

export class userservice{
    async signup(userdta:any){
        return await userrepo.signup(userdta)
    }
}