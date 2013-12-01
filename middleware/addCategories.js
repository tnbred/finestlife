var models = require(__dirname + "/../models");

module.exports = function(req, res, next) {
  req.metaData={};
  models.Category.find({}, function(err, categories) {
    req.metaData.categories = categories;
    next();
  });
};