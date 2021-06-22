const CustomError = require("../../helpers/error/CustomError");
const jwt = require("jsonwebtoken");
const getAccessToRoute = (req,res,next)=>{
    console.log(req.headers.authorization);
    next();
};
module.exports={
    getAccessToRoute
};
