const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");

const CustomerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: [true, "Please provide a phone"],
    unique: true,
    minlength :[9,"Please provide a phone with length 9"],
    maxlength:11
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  country: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  town: {
    type: String,
    required: true
  },
  district: {
    type: String,
    required: true
  },
  tax: {
    type: String,
    required: true
  },
  tax_num: {
    type: Number,
    required: true
  },
});

CustomerSchema.methods.generateJwtFromCustomer=function(){
  const{JWT_SECRET_KEY,JWT_EXPIRE}=process.env;

  const payload ={
      id:this._id,
      name:this.name
  };
  const token = jwt.sign(payload,JWT_SECRET_KEY,{
      expiresIn:JWT_EXPIRE
  });
  return token;

};



module.exports = mongoose.model(
  "CustomerApi",
 CustomerSchema
  );