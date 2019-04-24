const router = require('express').Router()

router.route('/login')
	.get((req,res)=> {
		res.json("login")
	})


router.route('/register')
	.post((req,res)=>{
		res.json('register')
	})


module.exports = router