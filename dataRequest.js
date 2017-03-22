const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const router = express.Router();
const fs = require('fs');
const request = require('request');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('src'));

app.set('port', process.env.PORT || 3000);

request('https://www.govtrack.us/api/v2/role?current=true', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    body = JSON.parse(body)
    const data = body['objects'];
    const senData = data.map(obj => {
      return {
        first_name: obj.person.firstname,
        last_name: obj.person.lastname,
        role_type: obj.role_type,
        party: obj.party,
        birthday: obj.person.birthday,
        gender: obj.person.gender,
        state: obj.state,
        start_date: obj.startdate,
        end_date: obj.enddate
      }
    })
    database('senators').insert(senData)
    .then(() => {
      database('senators').select()
      .then((senators) => {
        console.log(senators);
      })
    })
  }

  
})







app.listen(app.get('port'), () => {
  console.log(`It's lit AF over at ${app.get('port')}`);
})

module.exports = app;
