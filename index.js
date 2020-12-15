const express=require("express")
const app=express()
const port =8000
// const bodyParser =require("body-parser")
const bookRouter = require("./controllers/books")
const authorRouter =require("./controllers/auth")
const adminRouter = require("./controllers/admin")

// const userData = require("./books.json")
// const { response, request } = require("express")






app.use(express.json())

// app.use('/books',bookRouter)
app.use(bookRouter)
// app.use('/auth',authorRouter)
app.use(authorRouter)
// app.use('/admin',adminRouter)
app.use(adminRouter)

app.get('/',(request,response)=>{
    console.log("Backend na!", request.body)
    response.send("this is my backend")
})



app.listen(port,()=>{
    console.log("App is running")
})


// //get list of all books
// app.get('/books',(request,response)=>{
//     console.log(request)
//     const userData=require('./books.json')
//     response.json(userData)


// })

// //get list of all authors
// app.get('/authors',(request,response)=>{
//     console.log(request)
//     const userData=require('./authors.json')
//     response.json(userData)

// })

// // //create an new book
// // app.post('/books',(request,response)=>{
// //     const requestBody=request.body
// //     console.log(requestBody)
// //     response.send({action:"creating a new book",message:"book successfully created",body:requestBody
// //     })
// // })

// // //delete a book
// // app.delete('/books',(request,response)=>{
// //     const requestBody=request.body
// //     const users=require('/test.json')
// //     const deleteUsers=users.pop()
// //     response.send(deleteUsers)

// // })

// ///get specific book with bookid const id=request.params.id ,require your bookdata const books=require(.books.json) res.send(books[id])
// // app.get('/books/:rating',(request,response)=>{


// // const rating= request.params.rating
// // const newBooks=new Array()


// // for( let i=0; i<userData.length; i++){
// // if(userData[i].rating==rating){
// // newBooks.push(userData[i])
// // }
// // }
// // response.json (newBooks)
// // response.status(200).send(newBooks)


// // })
// // ///get specific book with bookid
// // app.get('/books/:bookid',(request,response)=>{
// //     const id =request.params.bookid
// //     const userData = require("./books.json")
// //     response.send(userData[id])
// // })

// ///deleting a book using an id



