// Load Data
var friendsData = require("../data/friends");

//Routing

module.exports = function(app){

app.get("/api/friends", function(req, res){
	res.json(friendsData0);
});

app.post("/api/friends", function(req,res){

})