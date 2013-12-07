var models = require(__dirname + "/../../models");

module.exports = function(req, res) {
  var name = req.param("name", null);
  try {

    // Try login
    var categoryId = null;
    var categories = req.metaData.categories;
    for (var i = 0; i < categories.length; i++) {
      if (categories[i].formattedName == name) {
        categoryId = categories[i]._id;
      }
    }

    models.Article
      .find({})
      .where('categoryId').equals(categoryId)
      .sort('field -createdAt')
      .exec(function(error, articles) {
        if (error) {
          res.redirect("/?error=" + error.message);
        } else {
          res.render(
            "category/show", {
              metaData: req.metaData,
              articles: articles
            }
          );
        }
      });

  } catch (error) {
    // Redirect with error
    res.redirect("/?error=" + error.message);
  }
};