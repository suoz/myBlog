var express = require('express')
var router = express.Router()

// /login
router.get('/', function(req, res, next){
    res.render('login')
})

router.post('/', function(req, res, next){
    let {username, password} = req.body
    console.log('username', username)
    res.send({"success": true})
})

module.exports = router