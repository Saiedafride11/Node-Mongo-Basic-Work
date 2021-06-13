const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())
app.use(bodyParser.json())

const users = ["kamal", "jamal", "tamal", "akamal", "akkas"]

app.get('/', (req, res) => {
    res.send('Thank You Calling Me')
  })

app.get('/fruits/banana', (req, res) => {
    res.send({fruit:'banana', quantity:1000, price:1200})
})

// app.get('/users/:id', (req, res) => {
//     console.log(req.params);
// })

// app.get('/users/:id', (req, res) => {
//     console.log(req.params.id);
// })

// app.get('/users/:id', (req, res) => {
//     const id = req.params.id;
//     const name = users[id];
//     res.send(name)
// })

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    console.log(req.query.sort);
    const name = users[id];
    res.send({id, name})
})

// Post request
app.post('/addUser', (req, res) => {
  // console.log("Post Req Send");
  // console.log('data recieved from', req.body);
  const user = req.body;
  user.id = 55;
  res.send(user);
})


app.listen(3000, () => console.log('listening  to port 3000'))