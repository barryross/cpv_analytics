
const express = require('express'),
 router = express.Router(),
 csv=require('csvtojson'), 
 spotsCSV='./data/spots.csv';
 rotationsCSV='./data/rotations.csv';

router.get('/spots', async (req, res, next) => {
	try{
	 let spots = await csv().fromFile(spotsCSV);
	 res.json({success:true, spots})
	}catch(error){
		res.json({success:false, error:error.message})
	}
});

router.get('/rotations', async (req, res, next) => {
	try{
	 let rotations = await csv().fromFile(rotationsCSV);
	 res.json({success:true, rotations})
	}catch(error){
		res.json({success:false, error:error.message})
	}
});

module.exports = router;
