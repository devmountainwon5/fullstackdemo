//Packages
const express = require('express'),
 cors = require('cors'),
 bodyParser = require('body-parser'),
 session = require('express-session'),
 massive = require('massive')

require('dotenv').config();
//Server variables
const app = express();

//Middleware setup
app.use(cors());
app.use(bodyParser.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

//Database setup
massive(process.env.CONNECTION_STRING)
    .then((dbInstance)=>{
        app.set('db', dbInstance)
        console.log('Db connected')
    })

// Get cb function for routes from controller.js look in server folder. 
const controller = require('./server/controller')
//Routes

    // Route for login
    app.post('/api/login', controller.login);
    //Route for register
    app.post('/api/register', controller.register);
    //Test route
    app.get('/api/ping', (req, res)=>{
        res.send('This worked')
    })

//Port setup
const port = process.env.PORT || 8090;;
app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})





