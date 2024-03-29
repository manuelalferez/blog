import Footer from "./Footer";
import Head from "next/head";
import Header from "./Header";

const Layout = (props) => {
  return (
    <div className="flex flex-col h-screen justify-between relative">
      <Head>
        <title>Manuel</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/x-icon"
          href="https://ik.imagekit.io/manuelalferez/blog/favicon_bear_z6-BgaRmV.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656173062037"
        />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/manuelalferez/blog/metaPreview_AAAZ0BCBJ.png?updatedAt=1637523218210"
        />
      </Head>
      <Header />
      <div className="my-10 mb-16">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
