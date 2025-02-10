// src/pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Thêm các thẻ meta hoặc link ở đây */}
          <link rel="stylesheet" href="https://example.com/styles.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main /> {/* Nơi mà nội dung của trang sẽ được render */}
          <NextScript /> {/* Thêm các script cần thiết */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
