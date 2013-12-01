// Imports
var mongoose = require("mongoose");

// Connect
mongoose.connect(require(__dirname + "/../config").Mongo.url, function(err) { if (err) console.log(err); } );

// Exports
module.exports = {
  User        : require(__dirname + "/user")(mongoose),
  Category : require(__dirname + "/category")(mongoose),
  Article : require(__dirname + "/article")(mongoose)
};