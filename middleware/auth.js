const { request, response } = require('express')
const jwt = require ('jsonwebtoken')
require('dotenv').config


const generateAccessToken=(username)=>{
return jwt.sign(username,process.env.ACCESS_TOKEN)

}

const authenticateToken=(request,response,next)=>{{
    const authHeader=req.headers['autorization']
    const token =authHeader&&authHeader.split('')[1]
}

if(token==null)return response.sendStatus(401)

jwt.verify(token,process.env.ACCESS_TOKEN,(error,user)=>{
    console.log(error)
    if(error) return response.sendStatus(403)
    request.user=user
    next()
})
}
module.exports={authenticateToken,generateAccessToken}