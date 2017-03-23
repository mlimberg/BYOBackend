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


//GET REQUESTS

app.get('/api/v1/senators', (request, response) => {
  const party  = request.param('party');
  database('senators').where('party', party).select()
  .then(sens => response.status(200).send(sens))
})

app.get('/api/v1/senators/:id', (request, response) => {
  const { id } = request.params;
  database('senators').where('id', id).select()
  .then(senator => response.status(200).send(senator))

})

app.get('/api/v1/reps', (request, response) => {
  database('representatives').select()
  .then(reps => response.status(200).send(reps))
})

app.get('/api/v1/reps/:id', (request, response) => {
  const { id } = request.params;
  database('representatives').where('id', id).select()
  .then(rep => response.status(200).send(rep))
})

app.get('/api/v1/states', (request, response) => {
  database('states').select()
  .then(states => response.status(200).send(states))
})

app.get('/api/v1/states/:id', (request, response) => {
  const { id } = request.params;
  database('states').where('id', id).select()
  .then(state => response.status(200).send(state))
})

//years left in office - still need to calculate years left correctly and then assign correctly
app.get('/api/v1/senators/:id/remaining', (request, response) => {
  const { id } = request.params;

  database('senators').where('id', id).select()
  .then(senator => {
    const currentYear = new Date().getFullYear();
    const years_left = senator[0].next_election - currentYear;
    return Object.assign(senator[0], {years_left})
  })
  .then(newObj => response.status(200).send(newObj))
  .catch(err => response.status(404).send(404))
})

//POST REQUESTS

app.post('/api/v1/senators', (request, response) => {

})

app.post('/api/v1/reps', (request, response) => {

})

app.post('/api/v1/states', (request, response) => {

})

//PUT or PATCH REQUESTS

app.put('/api/v1/senators/:id', (request, response) => {

})

app.put('/api/v1/reps/:id', (request, response) => {

})

app.patch('/api/v1/states/:id', (request, response) => {

})

//DELETE REQUESTS

app.delete('/api/v1/senators/:id', (request, response) => {

})

app.delete('/api/v1/reps/:id', (request, response) => {

})

app.delete('/api/v1/states/:id', (request, response) => {

})





app.listen(app.get('port'), () => {
  console.log(`It's lit AF over at ${app.get('port')}`);
})

module.exports = app;
