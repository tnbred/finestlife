require("date-format-lite");


module.exports = function(mongoose) {
  // Initialize schema
  var ArticleSchema = new mongoose.Schema({
    categoryId: mongoose.Schema.Types.ObjectId,
    userId: mongoose.Schema.Types.ObjectId,
    userName: String,
    title: String,
    content: String,
    createdAt: {
      type: Date,
      "default": Date.now
    },
    updatedAt: Date
  });

  ArticleSchema.statics.findAllByCategoryId = function(categoryId, callback) {
    this.find({
      categoryId: categoryId
    }, callback);
  };

  ArticleSchema.virtual("formattedCreatedAt").get(function() {
    Date.masks.default = 'DD,MMM YYYY';
    return this.createdAt.format();
  });

  return mongoose.model('Article', ArticleSchema);
};