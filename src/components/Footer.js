import React from "react";
import { Footer } from "antd/es/layout/layout";
import Link from "next/link";

const footerItems = [
  {
    title: "VỀ ANH KHÔI",
    items: [
      "Giới thiệu công ty",
      "Thông tin đối tác",
      "Thông tin tuyển dụng",
      "Thông tin liên hệ",
    ],
  },
  {
    title: "Chính sách công ty",
    items: [
      "Chính sách bảo mật",
      "Điều khoản sử dụng",
      "Chính sách đổi trả",
      "Chính sách vận chuyển",
    ],
  },
  {
    title: "THÔNG TIN LIÊN HỆ",
    items: [
      {
        text: "Địa chỉ: 74/28 Trương Quốc Dung, Phường 10, Quận Phú Nhuận, TP.HCM",
        link: "https://maps.app.goo.gl/bFiENRyY6cftbT5v6",
      },
      `Điện thoại: (028) 399 70 399`,
      `Hotline: 0908 30 13 13 (Mr. Trung Trần)`,
    ],
  },
];

function FooterLayout() {
  return (
    <Footer className="mt-3 bg-white">
      <div className="max-w-[1200px] w-full mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Link
                href="/"
                className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text"
              >
                Anh Khôi
              </Link>
              <h1 className="text-lg font-bold text-primary">
                CÔNG TY CỔ PHẦN TÍCH HỢP HỆ THỐNG ANH KHÔI
              </h1>
              <p className="text-sm text-gray-600 mb-4">
                Mã số thuế: 0314849179
              </p>
            </div>
          </div>

          {/* Rest of the footer content */}
          {footerItems.map((section, index) => (
            <div key={index} className="space-y-3">
              <label className="block uppercase font-bold text-sm sm:text-base">
                {section.title}
              </label>
              <div className="flex flex-col space-y-2">
                {section.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="text-gray-600 hover:text-gray-900 text-sm sm:text-base cursor-pointer"
                    onClick={() => {
                      if (typeof item === "object" && item.link) {
                        window.open(item.link, "_blank");
                      }
                    }}
                  >
                    {typeof item === "object" ? item.text : item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-4 border-t text-center">
          <p className="text-sm text-gray-600">
            © 2024 ANH KHOI. All rights reserved.
          </p>
        </div>
      </div>
    </Footer>
  );
}

export default FooterLayout;
