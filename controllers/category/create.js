var models = require(__dirname + "/../../models");

module.exports = function(req, res) {
  try {
    // Try login
    var name = req.param("name", null);
    var description = req.param("description", null);

    if (name && description) {
      var Category = models.Category;
      var category = new Category({
        name: name,
        description: description
      });

      // Save to mongo
      category.save(function(error) {
        if (error) {
          res.redirect("/boss/category?error=" + error.message);
        } else {
          res.redirect("/boss/category?success=true");
        }
      });
    } else {
      res.render(
        "category/create", {
          metaData: req.metaData
        }
      );
    }

  } catch (error) {
    // Redirect with error
    res.redirect("/boss?error=" + error.message);
  }
};