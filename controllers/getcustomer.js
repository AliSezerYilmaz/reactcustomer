const CustomerApi =require("../models/CustomersApi");
const asyncErrorWrapper =require("express-async-handler");

const getAllCustomers = asyncErrorWrapper(async(req,res,next)=>{
    const customers = await CustomerApi.find();
    return res.status(200)
    .json({
        success:true,
        data:customers
    });
});
module.exports={
 getAllCustomers
}
