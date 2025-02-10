// src/pages/contact.js
import Link from "next/link";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý gửi thông tin liên hệ ở đây
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // Reset form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="max-w-md mx-auto p-4 pt-[200px]">
      {" "}
      {/* Thêm padding-top */}
      <h1 className="text-2xl font-bold mb-4">Liên Hệ Ngay</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">
            Họ Tên
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1">
            Tin Nhắn
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full border border-gray-300 rounded p-2"
            rows="4"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white rounded p-2">
          Gửi Liên Hệ
        </button>
      </form>
      <div className="mt-4">
        <Link href="/about" className="text-blue-500">
          Quay lại trang Giới Thiệu
        </Link>
      </div>
    </div>
  );
};

export default Contact;
