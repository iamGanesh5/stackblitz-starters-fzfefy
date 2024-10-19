const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/shout', (req, res) => {
  let name = req.query.name;
  let upercaseName = name.toUpperCase();
  res.send(upercaseName);
});

app.get('/fullname', (req, res) => {
  let firstname = req.query.firstname;
  let lastname = req.query.lastname;
  let fullname = 'hi ' + firstname + ' ' + lastname + '!';
  res.send(fullname);
});
app.get('/Totaldistance', (req, res) => {
  let distance1 = parseFloat(req.query.distance1);
  let distance2 = parseFloat(req.query.distance2);
  let toataldistancce = distance1 + distance2;
  res.send(toataldistancce.toString());

});


app.get('/wellcome', (req, res) => {
  res.send(getWelcomeMessage());
});

function getWelcomeMessage(){
  return "Wellcome to this service"
}


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
