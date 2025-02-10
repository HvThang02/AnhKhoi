// src/pages/index.js
import Link from "next/link"; // Nhập Link từ next/link

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <h1 className="text-4xl font-bold text-white mb-8 drop-shadow-lg">
        Chào Mừng Đến Với Trang Chủ
      </h1>
      <div className="flex space-x-4">
        <Link href="/contact">
          <p className="bg-white text-blue-500 px-6 py-3 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out transform hover:scale-105">
            Liên Hệ
          </p>
        </Link>
        <Link href="/about">
          <p className="bg-white text-blue-500 px-6 py-3 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out transform hover:scale-105">
            Về Chúng Tôi
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
