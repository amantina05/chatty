const express = require('express')
const bodyParser = require('body-parser')
//init express & assign the app var

var app = express()
//We need to send our client-side code (located in the assets folder) to the user when they go to our site. We'll also want express to automatically parse stringified JSON data coming in and assign it as a JS Object to req.body.
app.use(express.static('assets'))
app.use(bodyParser.json())

// const messages = [
// 'hello',
// 'hey',
// 'how are you'
// ]
const messages = []

//Write a new GET endpoint that returns our array of message
app.get('/messages', (req, res, next) => {
  res.status(200).json({ messages: messages })
})
//Create our endpoint to POST a new message
// app.post('/messages', function (req, res, next) {
//   console.log(req.body);
// })

app.post('/messages', function (req, res, next) {
  console.log('trying to post')
  console.log(req.body);
  messages.push({ message: req.body.message, time: new Date(), username: req.body.username });
  res.status(200).json({messages: messages});
});

//start listening to a port
const port = 3000
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

