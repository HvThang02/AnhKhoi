import { Carousel } from "antd";

const slides = [
  {
    img: "https://res.cloudinary.com/anh-khoi/image/upload/v1739377937/slides/ufjbqxv8jymvqnwvyy7d.png",
    alt: "Banner slide 1",
  },
  {
    img: "https://res.cloudinary.com/anh-khoi/image/upload/v1739377937/slides/teu9vrnmrvjlfjymevvc.png",
    alt: "Banner slide 2",
  },
  {
    img: "https://res.cloudinary.com/anh-khoi/image/upload/v1739377937/slides/jlxdkeecckh42d5qasck.png",
    alt: "Banner slide 3",
  },
  {
    img: "https://res.cloudinary.com/anh-khoi/image/upload/v1739377937/slides/zsdmla8elhvmudf93qcp.png",
    alt: "Banner slide 4",
  },
];

const partners = [
  {
    img: "./images/partners/1.png",
    alt: "Partner 1",
  },
  {
    img: "./images/partners/2.png",
    alt: "Partner 2",
  },
  {
    img: "./images/partners/3.png",
    alt: "Partner 3",
  },
  {
    img: "./images/partners/4.png",
    alt: "Partner 4",
  },
  {
    img: "./images/partners/5.png",
    alt: "Partner 5",
  },
  {
    img: "./images/partners/6.png",
    alt: "Partner 6",
  },
  {
    img: "./images/partners/7.png",
    alt: "Partner 7",
  },
  {
    img: "./images/partners/8.png",
    alt: "Partner 8",
  },
  {
    img: "./images/partners/9.png",
    alt: "Partner 9",
  },
  {
    img: "./images/partners/10.png",
    alt: "Partner 10",
  },
  {
    img: "./images/partners/11.png",
    alt: "Partner 11",
  },
  {
    img: "./images/partners/12.png",
    alt: "Partner 12",
  },
  {
    img: "./images/partners/13.png",
    alt: "Partner 13",
  },
  {
    img: "./images/partners/14.png",
    alt: "Partner 14",
  },
  {
    img: "./images/partners/15.png",
    alt: "Partner 15",
  },
  {
    img: "./images/partners/16.png",
    alt: "Partner 16",
  },
  {
    img: "./images/partners/17.png",
    alt: "Partner 17",
  },
  {
    img: "./images/partners/18.png",
    alt: "Partner 18",
  },
  {
    img: "./images/partners/19.png",
    alt: "Partner 19",
  },
  {
    img: "./images/partners/20.png",
    alt: "Partner 20",
  },
  {
    img: "./images/partners/21.png",
    alt: "Partner 21",
  },
  {
    img: "./images/partners/22.png",
    alt: "Partner 22",
  },
  {
    img: "./images/partners/23.png",
    alt: "Partner 23",
  },
  {
    img: "./images/partners/24.png",
    alt: "Partner 24",
  },
  {
    img: "./images/partners/25.png",
    alt: "Partner 25",
  },
  {
    img: "./images/partners/26.png",
    alt: "Partner 26",
  },
  {
    img: "./images/partners/27.png",
    alt: "Partner 27",
  },
  {
    img: "./images/partners/28.png",
    alt: "Partner 28",
  },
  {
    img: "./images/partners/29.png",
    alt: "Partner 29",
  },
  {
    img: "./images/partners/30.png",
    alt: "Partner 30",
  },
  {
    img: "./images/partners/31.png",
    alt: "Partner 31",
  },
];

const Home = () => {
  const CustomPrevArrow = ({ onClick }) => (
    <button
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10  text-black p-2 rounded-full shadow-md hover:bg-gray-200 transition"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6"
      >
        <path
          fillRule="evenodd"
          d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10  text-black p-2 rounded-full shadow-md hover:bg-gray-200 transition"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6"
      >
        <path
          fillRule="evenodd"
          d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );

  return (
    <div className="w-full mt-[200px]">
      {/* Banner section với hiệu ứng gradient */}
      <div className="relative w-full group shadow">
        <Carousel
          arrows
          infinite={true}
          dots={false}
          autoplay
          autoplaySpeed={3000}
        >
          {slides.map((slide, index) => (
            <div className="relative" key={index}>
              <img
                src={slide.img}
                alt={slide.alt}
                className="w-[1900px] h-[400px] object-cover"
              />
              {/* Lớp mask */}
              <div className="absolute inset-0 bg-black opacity-70 z-10" />
              <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-4xl text-primary font-bold ">
                Trung Tâm Tích Hợp Hệ Thống
              </span>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="p-4 flex flex-col gap-20 items-center justify-center mb-20">
        <div className="grid grid-cols-2 pt-14 max-w-[1400px]">
          <div className="flex items-center justify-center">
            <img src="./images/banner/about.png" className="w-[500px] " />
          </div>
          <div className="flex flex-col ">
            <h2 className="text-3xl font-bold mb-6">Giới Thiệu Chung</h2>
            <p className=" mb-4 text-lg max-w-[500px]">
              Công ty CP Tích hợp hệ thống Anh Khôi là một công ty khởi nghiệp
              tiên phong trong lĩnh vực Công nghệ thông tin, tập trung vào cung
              cấp các giải pháp tích hợp hệ thống, tư vấn chuyển đổi số và các
              giải pháp về Cloud cho các doanh nghiệp. Chúng tôi là đối tác đáng
              tin cậy, hướng tới việc tối ưu hóa hiệu suất kinh doanh của khách
              hàng thông qua việc triển khai các giải pháp công nghệ tiên tiến
              và phù hợp với nhu cầu cụ thể của họ.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="grid grid-cols-2">
            <div className="flex flex-col max-w-[500px] items-end">
              <h2 className="text-3xl font-bold mb-6">Tầm Nhìn</h2>

              <p className="flex justify-end mb-4 text-lg items-end  text-right">
                Tầm nhìn của chúng tôi là trở thành một trong những nhà cung cấp
                giải pháp công nghệ hàng đầu, mang lại giá trị vượt trội và sự
                đổi mới liên tục cho khách hàng của mình. Chúng tôi không chỉ
                đơn thuần là một nhà cung cấp dịch vụ, mà còn là một đối tác
                chiến lược đồng hành cùng doanh nghiệp trong hành trình chuyển
                đổi số.
              </p>
            </div>
            <div className="flex items-center justify-center ">
              <img src="/images/banner/tam-nhin.png" className="w-[500px] " />
            </div>
          </div>
        </div>
      </div>
      <hr className="my-10 border-t-2 border-gray-200 w-full" />

      <div className="max-w-[1200px] mx-auto bg-white flex flex-col gap-10">
        <div className="">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center uppercase">
            Đối Tác Của Chúng Tôi
          </h3>
          <Carousel
            autoplay
            dots={false}
            slidesToShow={5}
            slidesToScroll={1}
            autoplaySpeed={1500}
            infinite
            arrows
            prevArrow={<CustomPrevArrow />}
            nextArrow={<CustomNextArrow />}
            responsive={[
              { breakpoint: 1024, settings: { slidesToShow: 4 } },
              { breakpoint: 768, settings: { slidesToShow: 3 } },
              { breakpoint: 480, settings: { slidesToShow: 2 } },
            ]}
            className="py-10 relative"
          >
            {partners.map((partner, index) => (
              <img
                src={partner.img}
                alt={partner.alt}
                key={index}
                className="h-[120px] object-contain rounded-lg w-auto transition-all duration-300 transform hover:scale-110 p-[6px]"
              />
            ))}
          </Carousel>
        </div>
        <hr className="my-10 border-t-2 border-gray-200 w-full" />
        <div className=" ">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center uppercase">
            Giá Trị Cốt Lõi
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
            <div className="text-center px-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
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
                    d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                  />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Tích Hợp Hệ Thống</h4>
              <p className="text-gray-600">
                Chúng tôi cung cấp các giải pháp tích hợp hệ thống đa dạng, từ
                từ vấn Hạ tầng CNTT đến triển khai ứng dụng hệ thống, giúp doanh
                nghiệp tối ưu hóa quá trình kinh doanh và tăng cường hiệu suất
                làm việc.
              </p>
            </div>
            <div className="text-center px-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
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
                    d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                  />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Chuyển Đổi Số</h4>
              <p className="text-gray-600">
                Với sự hiểu biết sâu sắc về công nghệ và quy trình kinh doanh,
                chúng tôi tư vấn và triển khai các chiến lược chuyển đổi số phù
                hợp, giúp doanh nghiệp tận dụng tối đa các ưu điểm của kỷ nguyên
                số hóa.
              </p>
            </div>
            <div className="text-center px-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
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
                    d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Giải Pháp Cloud</h4>
              <p className="text-gray-600">
                Chúng tôi cung cấp các giải pháp Cloud đáng tin cậy và hiệu quả,
                từ việc tư vấn lập kế hoạch đến triển khai và quản lý, giúp
                doanh nghiệp tiết kiệm chi phí và tăng cường linh hoạt trong
                quản lý hạ tầng công nghệ.
              </p>
            </div>
          </div>
        </div>

        <hr className="my-10 border-t-2 border-gray-200 w-full" />

        {/* Tại Sao Chọn Chúng Tôi */}
        <div className="grid grid-cols-2 max-w-[1400px] gap-10">
          <div className="flex items-end justify-end">
            <img src="./images/banner/why-us.png" className="w-[400px]" />
          </div>
          <div className="max-w-6xl  px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Tại sao chọn chúng tôi ?
            </h2>
            <div className="grid gap-4">
              <div className="bg-white p-6 hover:shadow-lg hover:border-[1px] hover:border-gray-200 border-[1px] border-white transition">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                  Phản hồi nhanh chóng
                </h3>
                <p className="text-gray-600">
                  Chúng tôi luôn sẵn sàng hỗ trợ kịp thời, đảm bảo xử lý sự cố
                  một cách nhanh chóng và hiệu quả. Đội ngũ kỹ thuật viên giàu
                  kinh nghiệm sẽ trực tiếp hỗ trợ khi cần thiết để giúp bạn khắc
                  phục vấn đề.
                </p>
              </div>
              <div className="bg-white p-6 hover:shadow-lg hover:border-[1px] hover:border-gray-200 border-[1px] border-white transition">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                  Uy tín
                </h3>
                <p className="text-gray-600">
                  Với hơn 10 năm hoạt động, Anh Khôi đã khẳng định vị thế là một
                  trong những công ty hàng đầu trong lĩnh vực công nghệ thông
                  tin. Thành công lớn nhất của chúng tôi chính là sự tin tưởng
                  của khách hàng, thể hiện qua số lượng đối tác dài hạn không
                  ngừng gia tăng mỗi năm.
                </p>
              </div>
              <div className="bg-white p-6 hover:shadow-lg hover:border-[1px] hover:border-gray-200 border-[1px] border-white transition">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                  Hài lòng
                </h3>
                <p className="text-gray-600">
                  Chúng tôi muốn bạn hoàn toàn hài lòng với các sản phẩm và dịch
                  vụ của chúng tôi. Chúng tôi sẽ thực hiện các công việc một
                  cách tối ưu để đáp ứng được tất cả nhu cầu của bạn.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-10 border-t-2 border-gray-200 w-full" />

        {/* Dịch Vụ Hỗ Trợ */}
        <div className="h-auto flex items-center justify-center flex-col p-4">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center uppercase">
            Dịch Vụ Hỗ Trợ
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 w-full max-w-6xl">
            {[
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-20 text-primary"
                  >
                    <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
                    <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
                  </svg>
                ),
                text: "Tư vấn và triển khai giải pháp tích hợp hệ thống.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-20 text-primary"
                  >
                    <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
                  </svg>
                ),
                text: "Tư vấn chuyển đổi số và tối ưu hóa quy trình kinh doanh.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-20 text-primary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ),
                text: "Tư vấn và triển khai các giải pháp Cloud đa dạng.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-20 text-primary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 0 1-.517.608 7.45 7.45 0 0 0-.478.198.798.798 0 0 1-.796-.064l-.453-.324a1.875 1.875 0 0 0-2.416.2l-.243.243a1.875 1.875 0 0 0-.2 2.416l.324.453a.798.798 0 0 1 .064.796 7.448 7.448 0 0 0-.198.478.798.798 0 0 1-.608.517l-.55.092a1.875 1.875 0 0 0-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 0 1-.064.796l-.324.453a1.875 1.875 0 0 0 .2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 0 1 .796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 0 1 .517-.608 7.52 7.52 0 0 0 .478-.198.798.798 0 0 1 .796.064l.453.324a1.875 1.875 0 0 0 2.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 0 1-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 0 0 1.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 0 1-.608-.517 7.507 7.507 0 0 0-.198-.478.798.798 0 0 1 .064-.796l.324-.453a1.875 1.875 0 0 0-.2-2.416l-.243-.243a1.875 1.875 0 0 0-2.416-.2l-.453.324a.798.798 0 0 1-.796.064 7.462 7.462 0 0 0-.478-.198.798.798 0 0 1-.517-.608l-.091-.55a1.875 1.875 0 0 0-1.85-1.566h-.344ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ),
                text: "Dịch vụ quản lý dự án và hỗ trợ kỹ thuật.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 border rounded-xl shadow-md flex flex-col items-center text-center"
              >
                {item.icon}
                <p className="text-black text-lg mt-4">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <hr className="my-10 border-t-2 border-gray-200 w-full" />

        {/* Thông tin liên hệ */}
        <div className="w-full flex items-center justify-center mb-20">
          <div className=" bg-white p-8 rounded-2xl shadow-md mx-20 border-[1px] w-[60%] flex flex-col items-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 ">
              Thông Tin Liên Hệ
            </h3>
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-medium mb-2">
                  CÔNG TY CP TÍCH HỢP HỆ THỐNG ANH KHÔI
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
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                    Phone:
                    <a
                      href="https://zalo.me/0908301313"
                      className="hover:underline text-blue-700"
                    >
                      0908 301 313
                    </a>
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
                    Email:
                    <a
                      href="mailto:info@anhkhoisi.com.vn"
                      className="hover:underline text-blue-700"
                    >
                      info@anhkhoisi.com.vn
                    </a>
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
                        d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                      />
                    </svg>
                    Website:
                    <a
                      href="https://anhkhoisi.com.vn"
                      className="hover:underline text-blue-700"
                    >
                      anhkhoisi.com.vn
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-medium mb-2">Thông Tin Khác</h2>
                <div className="space-y-2 text-gray-600">
                  <p>Mã số thuế: 0314849179</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
