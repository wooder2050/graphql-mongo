import * as mongoose from "mongoose";

export const Product = mongoose.model("Product", {
  name: String,
  img: String,
  content: String,
  price: Number,
  name_eng: String,
  kcal: String,
  protein: String,
  sat_fat: String,
  sodium: String,
  sugars: String,
  caffeine: String,
  category: String,
});
