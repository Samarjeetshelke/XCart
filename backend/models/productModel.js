import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
    },
    name:{
        type:String,
        required:[true,"Please provide your name"],
    },
    rating:{
        type:Number,
        required:true,
    },
    Comment:{
        type:String,
        required:true,
    },
    
},{
    timestamps:true,
});

const productSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
    },
    name: {
         type: String, required: true, 
    },
    description: {
         type: String, default: "" ,required:true,
    } ,
    image:{
        type:String,required:true,
    },
    brand:{
        type:String,required:true,
    },
    category:{
        type:String,required:true,
    },
    reviews:[reviewSchema],
    rating:{
        type:Number,
        required:true,
        default:0,
    },
    numReviews:{
        type:Number,
        required:true,
        default:0,
    },
    price:{
        type : Number,
        required:true,
        default:0,
    },
    countInStock:{
        type:Number,
        required:true,
        default:0,
    },

},{
    timestamps:true,
});

const product = mongoose.model("Product",productSchema);

export default Product;
