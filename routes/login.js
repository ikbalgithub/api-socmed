var Session = require('../utils/session')
var Driver = require('../utils/driver')
var driver = Driver(process.env);
var express = require('express');
var session = Session(driver);
var router = express.Router();
var _ = require('lodash')


router.post('/', (req, res, next) => {
  passport.authenticate('local',(e,u) => {à
    res.send({e,u})
  })(req, res, next)
})

router.post('/submit',async (req,res) => {
  var create  = session.create(
    session.driver
  )
  var result = await create.run(
    `match(u)<-[rel:profile]-(
    profile) where u.username=
    $username and u.password=$
    password return u,profile`
    ,new Object({...req.body})
  )
  if(result.records.length > 0){
   var row = records.map(r => {
    var u = r_fields.filter(_f
      => _f.labels == "user"
    )
    return u
   })
   res.send(row)
  }
})

module.exports = router
