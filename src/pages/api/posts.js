// src/pages/api/posts.js
import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise; // Đảm bảo client là một instance của MongoClient
    const db = client.db("AnhKhoi"); // Không cần chỉ định tên cơ sở dữ liệu nếu bạn đã kết nối đúng

    if (req.method === "GET") {
      const posts = await db.collection("anhkhoi").find({}).toArray();
      res.json(posts);
    } else if (req.method === "POST") {
      const post = req.body;
      console.log("Received post data:", post);

      const result = await db.collection("anhkhoi").insertOne(post);
      console.log("Post inserted:", result); // Log kết quả chèn

      // Thay đổi ở đây
      res.json({ id: result.insertedId, ...post }); // Trả về ID và dữ liệu đã chèn
    } else {
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error("Error in API handler:", error); // Log lỗi
    res.status(500).json({ error: "Internal Server Error" });
  }
}
