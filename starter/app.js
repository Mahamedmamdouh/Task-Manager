console.log('Iam very good')
console.log('morgan loves gehan')

const express=require('express')
const tasks=require('./routes/tasks')
const app =express()
const connectDB=require('./db/connect')
require('dotenv').config()
const notFound=require('./middleware/not-found')
const errorHandlerMiddleware=require('./middleware/error-handler')



// middleware
app.use(express.static('./public'))
app.use(express.json())


//rotes

app.use('/api/v1/tasks',tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)
//app.get
//app.post
//app.get
//app.patch
//app.delete


const port =process.env.PORT || 3000

 const start = async()=>{
      try {
       await connectDB(process.env.MONGO_URI)  
       app.listen(port,console.log(`Server is listening on port ${port}...`))      
      } catch (error) {
       console.log(error)     
      }
 }
 start()
  








