module.exports = function(mongoose) {
    // Initialize schema
    var ArticleSchema = new mongoose.Schema({
      categoryId       : mongoose.Schema.Types.ObjectId,
      userId       : mongoose.Schema.Types.ObjectId,
      title            : String,
      content          : String,
      createdAt        : { type: Date, "default": Date.now },
      updatedAt        : Date
    });

    ArticleSchema.statics.findAllByCategoryId = function(categoryId, callback) {
      this.find({ categoryId: categoryId }, callback);
    };

    return mongoose.model('Article', ArticleSchema);
};