const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const { ucWords, getImageURL, capitalizeBody } = require("../helpers/Common");

const postsSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			set: ucWords,
		},
		description: {
			type: String,
			required: true,
			get: capitalizeBody
		},
		coverImage: {
			type: String,
			get: (value) => getImageURL(value, "posts"),
			required: true,
		},
		status: {
			type: Boolean,
			default: true,
		},
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			alias: "user",
			required: true,
		},
		categoryId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Category",
			alias: "category",
			required: true,
		},
		tags: {
			type: Array,
			default: [],
		},
	},
	{
		versionKey: false,
		timestamps: true,
		toJSON: {
			transform(doc, res) {
				delete res._id;
				delete res.__v;
				delete res.userId;
				delete res.categoryId;
				delete res.createdAt;
				delete res.updatedAt;
			},
			getters: true,
		},
	}
).plugin(mongoosePaginate);

module.exports = mongoose.model("posts", postsSchema);
