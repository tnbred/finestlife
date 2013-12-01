var models = require(__dirname + "/../../models");

module.exports = function(req, res) {
  try {
    // Try login
    var email = req.param("email", null);
    var password = req.param("password", null);

    if (email && password) {
      var User = models.User;
      var user = new User({
        email: email,
        password: password
      });

      user.saltPassword(function(error) {
        // Save to mongo
        user.save(function(error) {
          if (error) {
            res.redirect("/boss?error=" + error.message);
          } else {
            req.session.user = user;
            res.redirect("/boss/article");
          }
        });
      });
    } else {
        res.render(
        "user/register", {
          metaData: req.metaData
        }
      );
    }

  } catch (error) {
    // Redirect with error
    res.redirect("/boss?error=" + error.message);
  }
};