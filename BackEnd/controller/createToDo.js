//import the model

const todo = require("../models/todo");

//define routeHandler

exports.createToDo=async(req,res) =>{
    try{
            //extract title and description from request body
            const {title,description} = req.body;
            
            //create a new todo obj and insert in DB
            const responce = await todo.create({title,description});

            //send a json responce with a success flag
            res.status(200).json(
                {
                    success:true,
                    data:responce,
                    message:"Entry created successfully"
                }
            );
    }catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"Internal server error",
            message:err.message,
        }) 
    }
}