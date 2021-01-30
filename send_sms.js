const http = require('http');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require('body-parser');
const express = require("express");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();
    console.log(typeof req.body.Body);
    const code = req.body.Body;
    console.log(code);
    if (code == '0101') {
      twiml.message('We are sending you details of the nearest hospital!');
    }
    else if (code == '0102') {
      twiml.message('We are sending you ambulance to your location in 10 min.!');
    }
     else if (code == '0103') {
      twiml.message('Please describe the disease of the patient');
    } else {
      twiml.message(
        'Wrong code provided.'
      );
    }

  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());
});

// listen for requests 
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});