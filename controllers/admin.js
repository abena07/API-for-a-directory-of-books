const express = require('express')
const adminRouter=express.Router()
const authentication =require('../middleware/auth')


adminRouter.post('/login',(request,response)=>{
    const {username,password}=request.body
    const token=authentication.generateAccessToken(username)
    response.status(200).send({"message":"you are logged in!","token":token})
})

module.exports=adminRouter