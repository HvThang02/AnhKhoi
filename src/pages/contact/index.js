import Link from "next/link";

const Contact = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center mt-[200px]">
      <div className="w-full max-w-4xl text-center px-4">
        <h2 className="text-3xl font-bold uppercase">
          Chúng tôi luôn sẵn sàng hỗ trợ bạn.
        </h2>
        <p className="mt-2 text-gray-300">
          Hãy liên hệ với chúng tôi để được tư vấn sớm nhất có thể.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-6">
          <span className="text-lg font-semibold">
            HOTLINE:{" "}
            <a className="text-blue-400" href="https://zalo.me/0908301313">
              0908 301 313
            </a>
          </span>
          <div className="h-6 w-px bg-gray-500 hidden sm:block"></div>
          <Link
            href="mailto:info@anhkhoijsc.com"
            className="bg-blue-500 px-6 py-2 rounded-lg text-white font-semibold hover:bg-blue-600 transition"
          >
            info@anhkhoijsc.com
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
