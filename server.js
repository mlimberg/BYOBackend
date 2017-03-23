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
  // const party  = request.param('party');
  const { party }  = request.query;
  database('senators').where('party', party).select()
  .then(sens => response.status(200).send(sens))
  .catch(err => response.sendStatus(404))
})

app.get('/api/v1/senators/:id', (request, response) => {
  const { id } = request.params;
  database('senators').where('id', id).select()
  .then(senator => response.status(200).send(senator))
  .catch(err => response.sendStatus(404))
})

app.get('/api/v1/reps', (request, response) => {
  database('representatives').select()
  .then(reps => response.status(200).send(reps))
  .catch(err => response.sendStatus(404))
})

app.get('/api/v1/reps/:id', (request, response) => {
  const { id } = request.params;
  database('representatives').where('id', id).select()
  .then(rep => response.status(200).send(rep))
  .catch(err => response.sendStatus(404))
})

app.get('/api/v1/states', (request, response) => {
  database('states').select()
  .then(states => response.status(200).send(states))
})

app.get('/api/v1/states/:id', (request, response) => {
  const { id } = request.params;
  database('states').where('id', id).select()
  .then(state => response.status(200).send(state))
  .catch(err => response.sendStatus(404))
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
  .catch(err => response.send(404, { error: 'Something went wrong. Please check the ID and try again' }))
})

app.get('/api/v1/reps/:id/remaining', (request, response) => {
  const { id } = request.params;

  database('representatives').where('id', id).select()
  .then(rep => {
    const currentYear = new Date().getFullYear();
    const years_left = rep[0].next_election - currentYear;
    return Object.assign(rep[0], {years_left})
  })
  .then(newObj => response.status(200).send(newObj))
  .catch(err => response.status(404).send({
    error: 'Something went wrong. Please check the ID and try again'
  }))
})

//POST REQUESTS

app.post('/api/v1/senators', (request, response) => {
  const { senator } = request.body;
  database('senators').insert(senator)
  .then(() => {
    database('senators').select()
    .then(senators => response.status(200).send(senators))
    .then(() => {
      database('states').where('id', senator.state_id).select()
      .then(state => {
        const update = state[0].num_of_sens + 1;
        console.log(update);
        database('states').where('id', senator.state_id).update({ num_of_sens: update })
        .then(() => console.log('states updated!'))
      })
    })
    .catch(err => response.status(422).send({ error: 'Could not process new record'}))
  })
})

app.post('/api/v1/reps', (request, response) => {
  const { rep } = request.body;

  database('representatives').insert(rep)
  .then(() => {
    database('representatives').select()
    .then(reps => response.status(200).send(reps))
    .then(() => {
      database('states').where('id', rep.state_id).select()
      .then(state => {
        const update = state[0].num_of_reps + 1;
        console.log(update);
        database('states').where('id', rep.state_id).update({ num_of_reps: update })
        .then(() => console.log('states updated!'))
      })
    })
    .catch(err => response.status(422).send({ error: 'Could not process new record'}))
  })
})

app.post('/api/v1/states', (request, response) => {
  const { state } = request.body;

  database('states').insert(state)
  .then(() => {
    database('states').select()
    .then(states => {
      response.status(200).send(states)
    })
  })
})

//PUT or PATCH REQUESTS

app.patch('/api/v1/senators/:id', (request, response) => {
  const { id, update } = request.body;

  database('senators').where('id', id).update(update)
  .then(() => {
    database('senators').select()
    .then(senators => response.status(200).send(senators))
    .catch(err => response.status(404).send({ error: 'ID did not match any on record'}))
  })
})

app.patch('/api/v1/reps/:id', (request, response) => {
  const { id, update } = request.body;

  database('representatives').where('id', id).update(update)
  .then(() => {
    database('representatives').select()
    .then(reps => response.status(200).send(reps))
    .catch(err => response.status(404).send({ error: 'ID did not match any on record'}))
  })
})

app.patch('/api/v1/states/:id', (request, response) => {
  const { id, update } = request.body;

  database('states').where('id', id).update(update)
  .then(() => {
    database('states').select()
    .then(states => response.status(200).send(states))
    .catch(err => response.status(404).send({ error: 'ID did not match any on record'}))
  })
})

//DELETE REQUESTS

app.delete('/api/v1/senators/:id', (request, response) => {
  const { id } = request.params;

  database('senators').where('id', id).del()
  .then(() => {
    database('senators').select()
    .then(senators => response.status(200).send(senators))
    .catch(err => response.status(404).send({ error: 'ID did not match any on record' }))
  })
})

app.delete('/api/v1/reps/:id', (request, response) => {
  const { id } = request.params;

  database('representatives').where('id', id).del()
  .then(() => {
    database('representatives').select()
    .then(reps => response.status(200).send(reps))
    .catch(err => response.status(404).send({ error: 'ID did not match any on record' }))
  })
})

app.delete('/api/v1/states/:id', (request, response) => {
  const { id } = request.params;

  database('senators').where('state_id', id).del()
  .then(() => {
    database('representatives').where('state_id', id).del()
    .then(() => {
      database('states').where('id', id).del()
      .then(() => response.status(200).send(`All records associated with state ID: ${id} have successfully been deleted`))
      .catch(err => response.status(404).send({ error: 'ID did not match any on record' }))
    })
  })
})


app.listen(app.get('port'), () => {
  console.log(`It's lit AF over at ${app.get('port')}`);
})

module.exports = app;
