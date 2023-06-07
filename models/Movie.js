
const mongoose=require("mongoose");

// create a schema

const movieSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxLength:10
    },
    runtime:{
        type:Number,
        min:1,
        max:[4,"movie runtime cannot exceed 4 hours"],
        required:true
    },
    year:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})

// create Models always singular and in camelcase

const Movie = mongoose.model("Movie",movieSchema);

// export this module, so that u can use this anywhere
// usually use by file name OR MODEL_NAME when export
module.exports = Movie