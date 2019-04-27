const passport = require('passport')
const jwt = require('jsonwebtoken')


const User = require('../models/User')
const config = require('../config/utils')


class UserAuthCtrl {

	static Register(req,res) {
		//lookup for email in database
		User.findOne({email: req.body.email}, (err,user)=>{
			if(err){
				throw err
			}
			//if email exist ( a user already exists )
			//do not register user
			if(user) {
				res.json({message: 'user already exists'})
			}else{
				//if no user with email exists
				//register new user
				User.register(new User({
					username: req.body.firstname,
					lastname: req.body.lastname,
					email: req.body.email
				}), req.body.password, (err,user)=>{
					if(err) {
						throw err
					}else{

						//new user registers successfully
						passport.authenticate('local')(req,res,()=>{
							return res.json({
								message: "User registered"
							})
						})
					}
				})
			}
		})
	
	}


	static Login(req,res) {

		passport.authenticate('local')(req,res, ()=>{
					console.log(req.user)

				//user unique info
				// const payload = {
				// 	id: req.user.id,
				// 	name: req.user.username
				// }
				// //if user authenticates succesfully
				// //assign unique token for user
				// jwt.sign(payload, config.secret, (err,token) =>{
				// 	if(err) {
				// 		throw err
				// 	}else{
				// 		return res.json({
				// 			message: "Login Success",
				// 			token
				// 		})
				// 	}
				// })

			})


	}


}


module.exports = UserAuthCtrl