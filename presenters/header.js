module.exports = {
  listHeader: function() {
    // Generate menu
    var list = [];
    var Util = require("util");

    var context = this;
    var metaData = context.metaData;
    var url = metaData.url;
    var categories = metaData.categories;
    var active = ("/" === url) ? "active" : "" 
      list.push(Util.format(
        "<li class=\"%s\"><a href=\"/\">Home</a></li>",
        active
      ));
    categories.forEach(function(category) {
      active = ("/category/" + category.name === url) ? "active" : "" 
      list.push(Util.format(
        "<li class=\"%s\"><a href=\"/category/%s\">%s</a></li>",
        active,
        category.name,
        category.description
      ));
    });

    if(metaData.current_user) {
      active = ("/boss/article" === url) ? "active" : "" 
      list.push(Util.format(
        "<li class=\"%s\"><a href=\"/boss/article\">New Article</a></li>",
        active
      ));

      active = ("/boss/register" === url) ? "active" : "" 
      list.push(Util.format(
        "<li class=\"%s\"><a href=\"/boss/register\">New Admin</a></li>",
        active
      ));
    } else {
      active = ("/boss" === url) ? "active" : "" 
      list.push(Util.format(
        "<li class=\"%s\"><a href=\"/boss\">Login</a></li>",
        active
      ));
    }

    return list.join('');
  }
}