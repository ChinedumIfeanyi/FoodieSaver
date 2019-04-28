const facebookStrategy = require('passport-facebook').Strategy
const passport = require('passport')
const User = require('../models/User')

module.exports = function(app) {

	passport.use(new facebookStrategy({
		clientID: "596228120812198",
		clientSecret: "960f54407f7953db1dbd0fc7ad90d197",
		callbackURL: 'https://foodiesaver.herokuapp.com/auth/facebook/callback'
	}, 
		(accessToken, refreshToken, profile, cb) =>{
			User.find({ facebookID: profile.id }, (err,user) => {
				if(err) {
					return res.json({
						error: "error"
					})
					if(!user) {
						const user = new User({
							username: profile.displayName,
							facebookID: profile.id
						})

						//save user
						user.save((err,user) => {
							if(err){
								res.json({
									eror: 'error'
								})
							}
							return cb(null, user)
						})
					}else {
						return cb(null, user)
					}
				}

			})
		}
	))

	app.get('/auth/facebook', 
		passport.authenticate('facebook', {authType: 'reauthenticate'})
	)

	app.get('/auth/facebook/callback',
		passport.authenticate('facebook', { failureRedirect: '/auth/login'}),
		(req,res) => {
			res.redirect('/')
		}
	)

}


