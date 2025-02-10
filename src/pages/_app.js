// src/pages/_app.js
import { PostsProvider } from "../context/PostsContext"; // Nhập PostsProvider từ context
import Layout from "../layouts/MainLayout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
