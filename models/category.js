module.exports = function(mongoose) {
	// Initialize schema
	var CategorySchema = new mongoose.Schema({
		name: String,
		description: String
	});


	CategorySchema.index({
		name: 1
	}, {
		unique: true
	});

	CategorySchema.virtual("formattedName").get(function() {
		return this.name.toLowerCase();
	});


	return mongoose.model('Category', CategorySchema);
};