var Session = require('../utils/session')
var Driver = require('../utils/driver')
var driver = Driver(process.env);
var express = require('express');
var session = Session(driver);
var router = express.Router();


router.post('/', (req, res, next) => {
  passport.authenticate('local',(e,u) => {à
    res.send({e,u})
  })(req, res, next)
})

router.post('/submit',async(req,res,next) => {
  try{
    var create = session.create(
      session.driver
    )
    var user = await create.run(
     `match(usr:user{username:
     $uname,password:$psswrd})
     <-[rel:profile]-(profile) 
     return usr.id as user_id,
     profile`,Object(req.body)
    )
    res.status(200).send(users)
  }
  catch({message}){
    res.status(500).send(
      message
    )
  }
})

module.exports = router
