module.exports = function(publicRoutes) {
  return function(req, res, next) {
    var loggedIn = typeof req.session.user !== "undefined";

    var shouldRedirect = !loggedIn;
    if (shouldRedirect && req.route.params.length > 0) {
      shouldRedirect = publicRoutes.indexOf("/" + req.route.params.pop()) === -1;
    }

    if (shouldRedirect) {
      res.redirect("/");
    } else {
      req.metaData.current_user=req.session.user;
      next();
    }

  }
};