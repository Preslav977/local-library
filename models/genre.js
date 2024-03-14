const mongoose = require("mongoose");

const { Schema } = mongoose;

const BookGenreSchema = new Schema({
  name: { type: String, minLength: 3, maxLength: 100, required: true },
});

BookGenreSchema.virtual("url").get(function () {
  return `/catalog/genre/${this._id}`;
});

module.exports = mongoose.model("BookGenre", BookGenreSchema);
