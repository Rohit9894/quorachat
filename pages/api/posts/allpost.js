import { Mongoconnect } from "../../../database/db";
import post from "../../../models/post.model";

export default async function All_posts(req, res) {
  await Mongoconnect();
  try {
    let data = await post.find();
    res.send(data);
  } catch (e) {
    res.send(e.message);
  }
}
