// require mongoose
const mongoose = require("mongoose");
// creating shorthand for the Schema constructor
const { Schema } = mongoose;

// schema
const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: "https://images-gmi-pmc.edge-generalmills.com/6ef7a9a1-08dc-4e94-8de9-10c4002103a5.jpg" },
});

// model and export
const Bread = mongoose.model("Bread", breadSchema);
module.exports = Bread;
