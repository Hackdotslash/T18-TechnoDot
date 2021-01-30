const http = require('http');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require('body-parser');
app.post('/', (req, res) => {
    const twiml = new MessagingResponse();
    const code = req.body.Body[0];
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
http.createServer(app).listen(1337, () => {
    console.log('Express server listening on port 1337');
});