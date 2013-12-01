var models = require(__dirname + "/../models");

module.exports = function(req, res, next) {
  req.metaData.url = req.url;
  next();
};