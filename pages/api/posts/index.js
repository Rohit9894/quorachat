import { Mongoconnect } from "../../../database/db";
import post from "../../../models/post.model";
const jwt = require("jsonwebtoken");
export default async function handler(req, res) {
  await Mongoconnect();
  const token = req.headers?.authorization?.split(" ")[1];
  const user = jwt.decode(token);
  const { method, body } = req;
  console.log(method);
  // if (method === "POST") {
  //   try {
  //     if (token) {
  //       // const user_id = decoded._id;
  //       // res.send(decoded);
  //       // const user_id = await user.findOne({ _id: find_id });

  //       // const id = user_id.id;
  //       // if (find_id === id) {
  //       //   console.log(user_id);
  //       const { title, content, image, like, category } = req.body;
  //       //   const posts = await user.updateOne(
  //       //     { _id: id },
  //       //     { $push: { myposts: [{ title, content, image }] } }
  //       //   );
  //       let name = user.name;
  //       const post_model = new post({
  //         name,
  //         user_name: user.id,
  //         title,
  //         image,
  //         category,
  //         content,
  //         like,
  //       });
  //       await post_model.save();
  //       res.status(201).send({ msg: "New post added", post_model });
  //       // } else {
  //       //   res.send("No user find");
  //       // }
  //     } else {
  //       res.send("please login");
  //     }
  //   } catch (e) {
  //     res.send(e.message);
  //   }
  // } else if (method === "GET") {
  // try {
  //   if (token) {
  //     let posts = await post.find({ user_name: user.id });
  //     res.send(posts);
  //   } else {
  //     res.send("please login");
  //   }
  // } catch (e) {
  //   res.send(e.message);
  // }
  // }
  switch (method) {
    case "GET": {
      const id = req.query.id;
      try {
        if (token) {
          if (id) {
            let data = await post.find({ user_name: id });
            return res.send(data);
          }
          let posts = await post.find({ user_name: user.id });
          return res.send(posts);
        } else {
          res.send("please login");
        }
      } catch (e) {
        res.send(e.message);
      }
    }
    case "POST": {
      console.log("post");
      try {
        if (token) {
          // const user_id = decoded._id;
          // res.send(decoded);
          // const user_id = await user.findOne({ _id: find_id });

          // const id = user_id.id;
          // if (find_id === id) {
          //   console.log(user_id);
          const { title, content, image, like, category } = req.body;
          //   const posts = await user.updateOne(
          //     { _id: id },
          //     { $push: { myposts: [{ title, content, image }] } }
          //   );
          let name = user.name;
          const post_model = new post({
            name,
            user_name: user.id,
            title,
            image,
            category,
            content,
            like,
          });
          await post_model.save();
          res.status(201).send({ msg: "New post added", post_model });
          // } else {
          //   res.send("No user find");
          // }
        } else {
          res.send("please login");
        }
      } catch (e) {
        res.send(e.message);
      }
    }
  }
}
