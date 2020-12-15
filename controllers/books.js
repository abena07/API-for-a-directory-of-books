const express =require('express')
const bookRouter =express.Router()
const bookData=require('../books.json')
const authentication =require('../middleware/auth')

///to get all books
bookRouter.get('/books',(request,response)=>{
        const requestBody=request.body
        console.log(requestBody)
       response.send({action:"creating a new book",message:"book successfully created",body:requestBody})
})

//to create a book(only after logging in as admin)
bookRouter.post('/create', authentication.authenticateToken,(request,response)=>{
    const newBook =request.body.book
    bookData.push(newBook)
    response.status(200).send('Succesfully created a book!')
})

//get a book using a specific bookid
bookRouter.get('/books/:bookid',(request,response)=>{
    const id =request.params.bookid
    response.send(bookData[id])
})

//to delete a book(only after logging in as admin)
bookRouter.delete('/books/:bookid',authentication.authenticateToken,(request,response)=>{
    const id=request.params.id
})


module.exports=bookRouter