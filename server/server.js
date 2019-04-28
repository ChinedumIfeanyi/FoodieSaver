const express = require('express')
const next = require('next')

const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const config = require('./config/utils')

//passport configuration
const authenticate = require('./config/passport')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const PORT = process.env.PORT || 3000


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
      
    //facebook authentication
    require('./config/facebookAuth')(server)

    server.use(bodyParser.urlencoded({
      extended: false
    }))
    server.use(passport.initialize() )
    
    server.use('/auth', 
      // authenticate.verifyUser,
      userAuth
    )
    

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(PORT, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })