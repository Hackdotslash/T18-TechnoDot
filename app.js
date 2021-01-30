const express = require('express');
const http = require('http');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const PORT = process.env.PORT || 3000;

client.messages
  .create({
     body: 'This is a test SMS from Sudipto',
     from: 'process.env.from_no',
     to: 'process.env.to_no'
   })
  .then(message => console.log(message.sid));

app.listen(PORT,() => {
    console.log(`Server is listening on port ${PORT}`);
})


