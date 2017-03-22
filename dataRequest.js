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
const repData = require('./repData.js');
const senData = require('./senateData.js');



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

// request('https://www.govtrack.us/api/v2/role?current=true', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     body = JSON.parse(body)
//     const data = body['objects'];
//     let senData = [];
//     let repData = [];
let states = [];

const senators = senData.map(obj => {
  const newObj = {
    first_name: obj.first_name,
    last_name: obj.last_name,
    role_type: 'senator',
    party: obj.party,
    next_election: obj.next_election,
    state: obj.state
  }
  return newObj
})

const reps = repData.map(obj => {
  const newObj = {
    first_name: obj.first_name,
    last_name: obj.last_name,
    role_type: 'senator',
    party: obj.party,
    next_election: obj.next_election,
    state: obj.state,
    district: obj.district
  }
  return newObj
})

const data = repData.concat(senData);


//
//     data.forEach(obj => {
//       if(obj.role_type === 'senator') {
//         const senObj = {
//           first_name: obj.person.firstname,
//           last_name: obj.person.lastname,
//           role_type: obj.role_type,
//           party: obj.party,
//           birthday: obj.person.birthday,
//           gender: obj.person.gender,
//           state: obj.state,
//           start_date: obj.startdate,
//           end_date: obj.enddate
//         }
//         senData.push(senObj)
//       }
//     })
//
//     // database('senators').insert(senData)
//     // .then(() => {
//     //   database('senators').select()
//     //   .then((senators) => {
//     //   })
//     // })
//
//     data.forEach(obj => {
//       if(obj.role_type === 'representative') {
//         const repObj = {
//           first_name: obj.person.firstname,
//           last_name: obj.person.lastname,
//           role_type: obj.role_type,
//           party: obj.party,
//           birthday: obj.person.birthday,
//           gender: obj.person.gender,
//           state: obj.state,
//           district: obj.district,
//           start_date: obj.startdate,
//           end_date: obj.enddate
//         }
//         repData.push(repObj)
//       }
//     })
//
//
//     // database('representatives').insert(repData)
//     // .then(() => {
//     //   database('representatives').select()
//     //   .then((reps) => {
//     //   })
//     // })
//
    const stateObject = data.reduce((stateObj, obj)  => {
      let st = obj.state
      if(!stateObj[st]) {
        stateObj[st] = {
          state: st,
          num_of_sens: obj.num_of_sens || 0,
          num_of_reps: obj.num_of_reps || 0
        }
      } else {
        if(obj.role_type === 'senator') {
          stateObj[st].num_of_sens++
        } else if (obj.role_type === 'rep') {
          stateObj[st].num_of_reps++
        }
      }
      return stateObj
    }, {})


    Object.keys(stateObject).forEach(state => {
      const obj = {
        state: stateObject[state].state,
        num_of_reps: stateObject[state].num_of_reps,
        num_of_sens: stateObject[state].num_of_sens
      }
      states.push(obj)
    })

    database('states').insert(states)
    .then(() => {
      database('states').select()
      .then((states) => {
        const finalSenData = senators.map(senObj => {
          let id;
          states.forEach(obj => {
            if(obj.state === senObj.state) {
              id = obj.id
            }
          })
          senObj.state_id = id
          return senObj
        })

        const finalRepData = reps.map(repObj => {
          let id;
          states.forEach(obj => {
            if(obj.state === repObj.state) {
              id = obj.id
            }
          })
          repObj.state_id = id
          return repObj
        })
        database('senators').insert(finalSenData)
        .then(() => {
          database('representatives').insert(finalRepData)
          .then(() => {
            console.log('data loaded!');
          })
        })
      })
    })




app.listen(app.get('port'), () => {
  console.log(`It's lit AF over at ${app.get('port')}`);
})

module.exports = app;
