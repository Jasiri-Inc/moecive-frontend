const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
const bcrypt = require("bcrypt")
const User = require("../models/user");


const create = async (req, res) => {
    const { email, password } = req.body;
  
    const user = await User.create({
      email,
      password
    });
  
    res.json({
      user,
      message: "create user successfully"
    });
  }

  module.exports = {create};