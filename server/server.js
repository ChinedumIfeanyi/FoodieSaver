const express = require('express')
const next = require('next')

const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const config = require('./config/utils')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

//database connection

mongoose.connect(
  config.db, 
  { useNewUrlParser: true },
    (err,db)=>{
      if(err){
        console.warn('database not connected')
      }else{
        console.log('database connected')
      }
  })


//user auth
const userAuth = require('./routes/userAuth')

app
  .prepare()
  .then(() => {
    const server = express()
    server.use(bodyParser())
    server.use('/auth', userAuth)
    

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })