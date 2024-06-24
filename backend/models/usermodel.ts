import mongoose, { Document, Model } from "mongoose";
export interface UserDocument extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  otp: Number;
  otp_updated_at: Date;
  is_verified: boolean;
  role: string;
  is_blocked: boolean;
  image: string;
  certificate: string;
  category: string;
  position: string;
  wallet:number
}

const userSchema = new mongoose.Schema<UserDocument>({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  
  
  is_blocked: {
    type: Boolean,
    default: false,
  },
  
});

const usersModel: Model<UserDocument> = mongoose.model(
  "userdetails",
  userSchema
);



export default usersModel;