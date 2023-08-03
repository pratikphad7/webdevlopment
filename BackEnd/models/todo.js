const mongoose = require("mongoose");

//Schema (Description of your data is known as Schema)
//this Schema of title
const todoSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:50,
        },
        description:{
            type:String,
            required:true,
            maxLength:50,
        },
        createdAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            require:true,
            default:Date.now(),
        }
    }
);

module.exports = mongoose.model("Todo",todoSchema);