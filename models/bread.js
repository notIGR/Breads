// require mongoose
const mongoose = require("mongoose");
// creating shorthand for the Schema constructor
const { Schema } = mongoose;

// schema
const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: {
    type: String,
    default:
      "https://media.istockphoto.com/photos/french-pastry-picture-id645542956?s=612x612",
  },
});

// model and export
const Bread = mongoose.model("Bread", breadSchema);
module.exports = Bread;
