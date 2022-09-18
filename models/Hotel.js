import mongoose from "mongoose";


const HotelSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    type:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    photos:{
        type:[String]
        
    },
    desc:{
        type:String,
        require:true
    },
    rating:{
        type:[Number],
        min:0,
        max:10
    },
    rooms:{
        type:[String]
    },
    price:{
        type:Number,
        require:true
    },
    featured:{
        type:Boolean,
        default:false
    },
})

export default mongoose.model("hotel",HotelSchema);