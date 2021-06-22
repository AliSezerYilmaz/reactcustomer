const express = require("express");
const router = express.Router();
const {register} = require("../controllers/auth");
const {getAllCustomers}=require("../controllers/getcustomer");


router.post("/register",register);
router.get("/customers",getAllCustomers);




module.exports = router;
