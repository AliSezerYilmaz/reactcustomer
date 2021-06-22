const CustomerApi = require("../models/CustomersApi");
const asyncErrorWraper = require("express-async-handler");
const sendJwtToClient = require("../helpers/authorization/tokenHelpers");
const register = asyncErrorWraper(async (req, res, next) => {
  
  const{name,surname,phone,country,city,town,district,tax,tax_num}=req.body;
  const customer = await CustomerApi.create({
    name,
    surname,
    phone:"05"+phone,
    country,
    city,
    town,
    district,
    tax,
    tax_num
  });
  sendJwtToClient(customer,res);

});

const tokentest=(req,res,next)=>{
  res.json({
    success:"true"
  })
}

module.exports = {
  register,
  tokentest
} 

