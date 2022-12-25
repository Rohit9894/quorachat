import { model, models, Schema } from "mongoose";
const postSchema = new Schema({
  name: String,
  user_name: String,
  title: String,
  image: String,
  category: String,
  content: String,
  like: Number,
});
export default models.post || model("post", postSchema);
