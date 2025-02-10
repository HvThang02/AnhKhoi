import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // Đặt URI MongoDB trong biến môi trường
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // Trong môi trường phát triển, sử dụng client MongoDB
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // Trong môi trường sản xuất, sử dụng client MongoDB
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
