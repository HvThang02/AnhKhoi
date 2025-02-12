// src/pages/_app.js
// import { PostsProvider } from "../context/PostsContext"; // Nhập PostsProvider từ context
import Layout from "../layouts/MainLayout";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Công ty CP Tích hợp hệ thống Anh Khôi</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
