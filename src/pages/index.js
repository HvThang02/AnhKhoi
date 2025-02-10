import Link from "next/link";
import { useEffect, useState } from "react";

const Home = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1280);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isLargeScreen) {
    return (
      <div className="max-w-[1200px] mx-auto px-4 py-16 mt-[11rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Phần giới thiệu công ty */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              CÔNG TY CỔ PHẦN TÍCH HỢP HỆ THỐNG ANH KHÔI
            </h2>

            <div className="prose prose-lg">
              <p className="text-gray-600 leading-relaxed">
                Lời đầu tiên, CÔNG TY CỔ PHẦN TÍCH HỢP HỆ THỐNG ANH KHÔI xin
                kính gửi tới Quý Khách hàng lời chào trân trọng cùng lời chúc
                sức khỏe và thành công.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Anh Khôi được thành lập và hoạt động với tôn chỉ.
              </p>
            </div>
          </div>

          {/* Phần thống kê và thành tựu */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-600">Hỗ trợ khách hàng</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">99%</div>
              <div className="text-gray-600">Khách hàng hài lòng</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-gray-600">Năm kinh nghiệm</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-gray-600">Sản phẩm cung cấp</div>
            </div>
          </div>
        </div>

        {/* Phần giá trị cốt lõi */}
        <div className="mt-16 bg-gray-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Giá Trị Cốt Lõi
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-handshake text-2xl text-primary"></i>
              </div>
              <h4 className="font-semibold mb-2">Uy Tín</h4>
              <p className="text-gray-600">
                Đặt chữ tín lên hàng đầu trong mọi giao dịch
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-chart-line text -2xl text-primary"></i>
              </div>
              <h4 className="font-semibold mb-2">Chất Lượng</h4>
              <p className="text-gray-600">
                Cam kết chất lượng sản phẩm và dịch vụ tốt nhất
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-2xl text-primary"></i>
              </div>
              <h4 className="font-semibold mb-2">Đồng Hành</h4>
              <p className="text-gray-600">
                Luôn sát cánh cùng sự phát triển của khách hàng
              </p>
            </div>
          </div>
        </div>

        {/* Phần thông tin liên hệ */}
        <div className="mt-16 bg-white p-8 rounded-2xl shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Thông Tin Liên Hệ
          </h3>
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-medium mb-2">
                CÔNG TY TNHH PHÁT TRIỂN CNTT ANH KHÔI
              </h2>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  74/28 Trương Quốc Dung, Phường 10, Quận Phú Nhuận, Tp HCM
                </p>

                <p className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  Tel: (028) 399 70 399 hoặc: (028) 399 70 398
                </p>

                <p className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  Email: info@hac.com.vn
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-2">Các Bộ Phận</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Phòng kinh doanh:</h3>
                  <p className="text-gray-600">Mr Trung Trần</p>
                  <p className="text-gray-600">SĐT: 0907 006 1313</p>
                  <p className="text-gray-600">Email: trungtran@hac.com.vn</p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">
                    Phòng kỹ thuật - Hỗ trợ bảo hành:
                  </h3>
                  <p className="text-gray-600">Mr Hưng</p>
                  <p className="text-gray-600">SĐT: 0824 636 768</p>
                  <p className="text-gray-600">Email: hungnguyen@hac.com.vn</p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Phòng kế toán:</h3>
                  <p className="text-gray-600">SĐT: 028 399 70 399</p>
                  <p className="text-gray-600">Email: info@hac.com.vn</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-2">Thông Tin Khác</h2>
              <div className="space-y-2 text-gray-600">
                <p>
                  Tài khoản số: 1670342339 Tại Ngân Hàng ACB-CN Nguyễn Văn Trỗi
                </p>
                <p>Mã số thuế: 0314849179</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full h-screen relative overflow-hidden mt-[11rem]">
      <Link
        href="/contact"
        className="w-1/2 flex items-center justify-center bg-white text-primary font-semibold text-4xl uppercase relative overflow-hidden border-r border-primary group"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-primary to-white transform -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0"></span>
        <span className="relative z-10 flex items-center">
          Liên Hệ
          <span className="ml-4 transition-transform duration-300 group-hover:translate-x-2">
            ➜
          </span>
        </span>
      </Link>
      <Link
        href="/about"
        className="w-1/2 flex items-center justify-center bg-white text-primary font-semibold text-4xl uppercase relative overflow-hidden group"
      >
        <span className="absolute inset-0 bg-gradient-to-l from-primary to-white transform translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0"></span>
        <span className="relative z-10 flex items-center">
          Về Chúng Tôi
          <span className="ml-4 transition-transform duration-300 group-hover:translate-x-2">
            ➜
          </span>
        </span>
      </Link>
    </div>
  );
};

export default Home;
