const {User} = require("../models")

module.exports = {
	findAll: async function(req, res){
		try {
			const data = await User.find()
			res.json(data)
		} catch (error) {
			//do work
		}
	},
	create: async function (req,res){
		try {
			const data = await User.create(req.body)
			res.json(data)
		} catch (error) {
			
		}
	}
}