const express = require('express')

const app = express();   // app is an instance (object)
const data = require('./data/contacts')

// console.log(app);



// get("resource endpoint" , callback function ( request , response ))

app.get('/home', (req, res) => {
    // console.log(req);
    // res.send('--- some dummy data from server ---')
    res.send('<h1> Home Page <h1> <br> <hr> <p> put : "/user" to access user data</p>')
})

app.get('/user', (req, res) => {
    res.send(JSON.stringify(data))
})  
app.get('/user', (req, res) => {
    res.send('Duplicate user route')  // server will ignore the second route and pick first one
}) 

// instead of testing the data on browser , we can also check it on postman
// by putting http://localhost:port/endpoint


// post request cannot be done only using browser , so we use POSTMAN 




// we have to restart server every time we change anything
// for this we use package called node 
app.listen(8080, () => console.log("server started at port 8080"))  // starts the server on given port number


