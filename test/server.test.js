process.env.NODE_ENV = 'test'

const chai = require('chai');
const expect = chai.expect;
const app = require('../server.js');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const environment = 'test';
const configuration = require('../knexfile.js')[environment];
const database = require('knex')(configuration);


describe('Server', () => {

  beforeEach((done) => {
    database.migrate.rollback()
    .then(() => {
    database.migrate.latest()
    .then(() => {
      database.seed.run()
      .then(() => {
        done()
        })
      })
    })
  });

  afterEach((done) => {
    database.migrate.rollback()
    .then(() => {
      done()
    })
  })


  describe('server', () => {
    it('should exist', () => {
      expect(app).to.exist;
    });
  })




  describe('GET requests', () => {

    it('/senators - should return all senators if no query param is set', (done) => {
      chai.request(app)
      .get('/api/v1/senators')
      .end((err, res) => {
        if(err) { done(err) }
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        expect(res.body).to.have.length(3);
        done()
      })
    })

    it('/senators?party=D should return only senators with a party type of D', (done) => {
      chai.request(app)
      .get('/api/v1/senators?party=D')
      .end((err, res) => {
        if(err) { done(err) }
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        expect(res.body).to.have.length(1);
        expect(res.body[0].party).to.equal('D')
        done()
      })
    })

    it('/api/v1/senators/:id should return a specific senator', (done) => {
      chai.request(app)
      .get('/api/v1/senators/12')
      .end((err, res) => {
        if(err) { done(err) }
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        expect(res.body).to.have.length(1);
        expect(res.body[0].id).to.equal(12)
        done()
      })
    })

    it('/api/v1/senators/:id should return an error if the ID does not exist', (done) => {
      chai.request(app)
      .get('/api/v1/senators/200')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.be.a('object');
        done()
      })
    })

    it('/reps - should return all reps if no query param is set', (done) => {
      chai.request(app)
      .get('/api/v1/reps')
      .end((err, res) => {
        if(err) { done(err) }
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        expect(res.body).to.have.length(3);
        done()
      })
    })

    it('/reps?party=D should return only reps with a party type of D', (done) => {
      chai.request(app)
      .get('/api/v1/reps?party=D')
      .end((err, res) => {
        if(err) { done(err) }
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        expect(res.body).to.have.length(1);
        expect(res.body[0].party).to.equal('D')
        done()
      })
    })

    it('/api/v1/reps/:id should return a specific rep', (done) => {
      chai.request(app)
      .get('/api/v1/reps/12')
      .end((err, res) => {
        if(err) { done(err) }
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        expect(res.body).to.have.length(1);
        expect(res.body[0].id).to.equal(12)
        done()
      })
    })

    it('/api/v1/reps/:id should return an error if the ID does not exist', (done) => {
      chai.request(app)
      .get('/api/v1/reps/200')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.be.a('object');
        done()
      })
    })

    it('/states - should return all states if no query param is set', (done) => {
      chai.request(app)
      .get('/api/v1/states')
      .end((err, res) => {
        if(err) { done(err) }
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        expect(res.body).to.have.length(3);
        done()
      })
    })

    it('/api/v1/states/:id should return a specific state', (done) => {
      chai.request(app)
      .get('/api/v1/states/12')
      .end((err, res) => {
        if(err) { done(err) }
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        expect(res.body).to.have.length(1);
        expect(res.body[0].id).to.equal(12)
        done()
      })
    })

    it('/api/v1/states/:id should return an error if the ID does not exist', (done) => {
      chai.request(app)
      .get('/api/v1/states/200')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.be.a('object');
        done()
      })
    })

    it('/api/v1/senators/:id/remaining should return a specific senator w/ years_left', (done) => {
      chai.request(app)
      .get('/api/v1/senators/12/remaining')
      .end((err, res) => {
        if(err) { done(err) }
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('object');
        expect(res.body.id).to.equal(12);
        expect(res.body.years_left).to.equal(3);
        done()
      })
    })

    it('/api/v1/reps/:id/remaining should return a specific rep with years_left', (done) => {
      chai.request(app)
      .get('/api/v1/reps/12/remaining')
      .end((err, res) => {
        if(err) { done(err) }
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('object');
        expect(res.body.id).to.equal(12);
        expect(res.body.years_left).to.equal(3);
        done()
      })
    })
  })


  describe('POST requests', () => {
    it('/api/v1/senators should create a new senator record', (done) => {
      const newSen = {
        'first_name': 'Lewith',
        'last_name': 'Anderson',
        'role_type': 'senator',
        'next_election': 2022,
        'party': 'D',
        'state_id': 11
      }

      chai.request(app)
      .post('/api/v1/senators')
      .send({
        senator: newSen
      })
      .end((err, res) => {
        if(err) { done(err) }
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        expect(res.body).to.have.length(4);
        done();
      })
    })

    it('/api/v1/senators should respond with an error if new record cannot be processed', (done) => {
      chai.request(app)
      .post('/api/v1/senators')
      .end((err, res) => {
        expect(res).to.have.status(422);
        expect(res).to.be.json;
        done();
      })
    })

    it('/api/v1/reps should create a new representative record', (done) => {
      const newRep = {
        'first_name': 'Lewith',
        'last_name': 'Anderson',
        'role_type': 'senator',
        'next_election': 2022,
        'party': 'D',
        'district': 4,
        'state_id': 11
      }

      chai.request(app)
      .post('/api/v1/reps')
      .send({
        rep: newRep
      })
      .end((err, res) => {
        if(err) { done(err) }
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        expect(res.body).to.have.length(4);
        done();
      })
    })

    it('/api/v1/reps should respond with an error if new record cannot be processed', (done) => {
      chai.request(app)
      .post('/api/v1/reps')
      .end((err, res) => {
        expect(res).to.have.status(422);
        expect(res).to.be.json;
        done();
      })
    })

    it('/api/v1/states should create a new senator record', (done) => {
      const newState = {
        'state': 'MN',
        'num_of_sens': 0,
        'num_of_reps': 0
      }

      chai.request(app)
      .post('/api/v1/states')
      .send({
        state: newState
      })
      .end((err, res) => {
        if(err) { done(err) }
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        expect(res.body).to.have.length(4);
        done();
      })
    })

    it('/api/v1/states should respond with an error if new record cannot be processed', (done) => {
      chai.request(app)
      .post('/api/v1/states')
      .end((err, res) => {
        expect(res).to.have.status(422);
        expect(res).to.be.json;
        done();
      })
    })
  })


  describe('PATCH requests', () => {

    it('/api/v1/senators/:id should update an existing senator record', (done) => {
      const update = {
        'next_election': 3033
      }

      chai.request(app)
      .patch('/api/v1/senators/13')
      .send({
        update: update
      })
      .end((err, res) => {
        if(err) { done(err) }
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        expect(res.body).to.have.length(3);
        expect(res.body[2].next_election).to.equal(3033)
        done();
      })
    })

    it('/api/v1/reps/:id should update an existing rep record', (done) => {
      const update = {
        'next_election': 3033
      }

      chai.request(app)
      .patch('/api/v1/reps/13')
      .send({
        update: update
      })
      .end((err, res) => {
        if(err) { done(err) }
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        expect(res.body).to.have.length(3);
        expect(res.body[2].next_election).to.equal(3033)
        done();
      })
    })

    it('/api/v1/reps/:id should update an existing state record', (done) => {
      const update = {
        'num_of_reps': 8
      }

      chai.request(app)
      .patch('/api/v1/states/13')
      .send({
        update: update
      })
      .end((err, res) => {
        if(err) { done(err) }
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        expect(res.body).to.have.length(3);
        expect(res.body[2].num_of_reps).to.equal(8)
        done();
      })
    })
  })


  describe('DELETE requests', () => {
    it('/api/v1/senators/:id should delete record that matches ID', (done) => {
      chai.request(app)
      .delete('/api/v1/senators/13')
      .end((err, res) => {
        if(err) { done(err) }
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        expect(res.body).to.have.length(2);
        done();
      })
    })

    it('/api/v1/reps/:id should delete record that matches ID', (done) => {
      chai.request(app)
      .delete('/api/v1/reps/13')
      .end((err, res) => {
        if(err) { done(err) }
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        expect(res.body).to.have.length(2);
        done();
      })
    })

    it('/api/v1/states/:id should delete record that matches ID', (done) => {
      chai.request(app)
      .delete('/api/v1/states/13')
      .end((err, res) => {
        if(err) { done(err) }
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        expect(res.text).to.equal('All records associated with state ID: 13 have successfully been deleted')
        done();
      })
    })

  })

});
