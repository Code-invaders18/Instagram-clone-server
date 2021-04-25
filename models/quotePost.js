const mongoose=require('mongoose')
const { ObjectId } = mongoose.Schema;

const quotePostSchema=new mongoose.Schema({
    quote:{
        type:String,
        required:true
    },
    postedBy:{
        type:ObjectId,
        ref:"User"
    }
},{timestamps:true})

module.exports=mongoose.model("quotePost",quotePostSchema)

