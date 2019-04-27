const router = require('express').Router()

//controller
const UserAuthCtrl = require('../controllers/UserAuthCtrl')

router.route('/login')
	.post(UserAuthCtrl.Login)


router.route('/register')
	.post(UserAuthCtrl.Register)


module.exports = router