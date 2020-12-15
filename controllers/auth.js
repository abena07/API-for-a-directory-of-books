const express = require('express')
const authorRouter = express.Router()
const authorData =require('../authors.json')
const authentication=require('../middleware/auth')

// Hey am here, hope you can see? Hello!!!

// getting all authors
authorRouter.get('/authors',(request,response)=>{
        console.log(request)
       
       response.json(authorData)
})

//get an author with a specific id
authorRouter.get('/authors/:authorId', (request, response) => {
let author = authorData.find(author => author["authorId"] === request.params.authorId)
    if(author){
        response.status(200).send(author)
    } else{
        response.status(400).send('An author with that id was not found')
    }
})


//get all books by an author
authorRouter.get('/authors:authorId/books', (request, response) => {
    let books = authorData.find(author => author["authorId"] === request.params.authorId)
    if(books){
        response.status(200).send(books.books)
    } else {
        response.status(200).send('An author with that id was not found')
    }
})

//delete an author
authorRouter.delete('/authors/:authorId', authentication.authenticateToken, (request, response) => {
    let idToDelete = request.params.authorId

})

    module.exports=authorRouter