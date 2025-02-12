import React from "react";
import { Input, Drawer } from "antd";

import { Carousel } from "antd";
import Link from "next/link";

// const items = [
//   {
//     key: "sub1",
//     label: "Navigation One",
//     icon: <MailOutlined />,
//     children: [
//       {
//         key: "g1",
//         label: "Item 1",
//         type: "group",
//         children: [
//           {
//             key: "1",
//             label: "Option 1",
//           },
//           {
//             key: "2",
//             label: "Option 2",
//           },
//         ],
//       },
//       {
//         key: "g2",
//         label: "Item 2",
//         type: "group",
//         children: [
//           {
//             key: "3",
//             label: "Option 3",
//           },
//           {
//             key: "4",
//             label: "Option 4",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     key: "sub2",
//     label: "Navigation Two",
//     icon: <AppstoreOutlined />,
//     children: [
//       {
//         key: "5",
//         label: "Option 5",
//       },
//       {
//         key: "6",
//         label: "Option 6",
//       },
//       {
//         key: "sub3",
//         label: "Submenu",
//         children: [
//           {
//             key: "7",
//             label: "Option 7",
//           },
//           {
//             key: "8",
//             label: "Option 8",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     type: "divider",
//   },
//   {
//     key: "sub4",
//     label: "Navigation Three",
//     icon: <SettingOutlined />,
//     children: [
//       {
//         key: "9",
//         label: "Option 9",
//       },
//       {
//         key: "10",
//         label: "Option 10",
//       },
//       {
//         key: "11",
//         label: "Option 11",
//       },
//       {
//         key: "12",
//         label: "Option 12",
//       },
//     ],
//   },
//   {
//     key: "grp",
//     label: "Group",
//     type: "group",
//     children: [
//       {
//         key: "13",
//         label: "Option 13",
//       },
//       {
//         key: "14",
//         label: "Option 14",
//       },
//     ],
//   },
// ];

const EMAIL = "trungtran@hac.com.vn";

const contentStyle = {
  margin: 0,
  height: "30px",
  color: "#ffd500",
  lineHeight: "30px",
  textAlign: "center",
  background: "#000",
  fontWeight: "500",
};

const Navbar = () => {
  return (
    <header className="bg-secondary fixed top-0 left-0 right-0 z-50">
      <Carousel
        arrows
        infinite={true}
        dots={false}
        autoplay
        autoplaySpeed={3000}
      >
        <div>
          <h3 style={contentStyle}>Freeship Nội Thành TP.HCM</h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            Địa chỉ: 74/28 Trương Quốc Dung, Phường 10, Quận Phú Nhuận, Tp. HCM
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>Liên Hệ: 028 399 70 399</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Email: trungtran@hac.com.vn</h3>
        </div>
      </Carousel>
      <div className="mx-auto ">
        <ul className="flex items-center justify-between">
          <li className="shrink-0 flex items-center justify-center w-full py-4">
            <Link
              href="/"
              className="flex items-center justify-center flex-col"
            >
              <img
                src="./images/anhkhoi-logo/anhkhoi-pri.png"
                className="w-16 h-16"
              />
              <span className="text-primary pt-2 font-semibold ">
                Công ty CP Tích hợp hệ thống Anh Khôi
              </span>
            </Link>
          </li>
        </ul>

        <ul className="shadow font-semibold w-full items-center justify-center space-x-[25px] sm:space-x-[60px] py-4 lg:text-md text-xs text-gray-900 bg-white flex uppercase">
          <Link href="/" className="">
            Trang Chủ
          </Link>
          <Link href="/" className="">
            Giới Thiệu
          </Link>
          <Link href="/contact" className="">
            Liên Hệ
          </Link>
          <Link href="/contact" className="">
            tích hợp hệ thống
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
