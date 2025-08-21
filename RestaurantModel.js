import mongoose from "mongoose";

// Food subdocument schema
const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
}, { _id: true })   // keeps _id for each food item

// Restaurant schema
const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  food_list: [foodSchema]   // embedding food documents inside restaurants
})

const restaurantModel = mongoose.models.Restaurant || mongoose.model("Restaurant", restaurantSchema);

export default restaurantModel;
