import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // Đặt URI MongoDB trong biến môi trường

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // Trong môi trường phát triển, sử dụng client MongoDB
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // Trong môi trường sản xuất, sử dụng client MongoDB
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
