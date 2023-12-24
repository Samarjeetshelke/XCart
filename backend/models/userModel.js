import mongoose from "mongoose";


const userSchema = new mongoose.schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        type:String,
        unique :true ,  //this will ensure that the email is not repeated in database
        required:true,
    },
    password:{
        type:String,
        required: true,
    },
    isAdmin:{
        type:Boolean,
        default:false,   //by default a normal user will be created
    },

},{
    timestamps:true,
});
const User = mongoose.model('User',userSchema);
export default User;