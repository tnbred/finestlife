var models = require(__dirname + "/../../models");


module.exports = function(req, res) {

  try {
    // Try login
    var title = req.param("title", null);
    var content = req.param("content", null);
    var categoryId = req.param("category", null);

    if (title && content && categoryId) {
      var Article = models.Article;
      console.log(req.session.user.name);
      var article = new Article({
        title: title,
        content: content,
        categoryId: categoryId,
        userId: req.session.user._id,
        userName:req.session.user.name
      });

      // Save to mongo
      article.save(function(error) {
        if (error) {
          res.redirect("/boss/article?error=" + error.message);
        } else {
          res.redirect("/boss/article?success=true");
        }
      });
    } else {
      res.render(
        "article/create", {
          metaData: req.metaData,
          categories: req.metaData.categories
        }
      );
    }

  } catch (error) {
    res.render(
      "article/create", {
        metaData: req.metaData,
        categories: req.metaData.categories
      }
    );
  }



};