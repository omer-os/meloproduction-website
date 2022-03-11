import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

import AndoridSm from "../../public/android-chrome-192x192.png";
import AndoridLg from "../../public/android-chrome-512x512.png";
import Apple from "../../public/apple-touch-icon.png";
import FavSm from "../../public/favicon-16x16.png";
import FavMd from "../../public/favicon-32x32.png";
import Fav from "../../public/favicon.ico";

const Meta = ({ title, desc, css, js }) => {
  const { t, lang } = useTranslation("home");

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />
      <meta name="og:description" property="og:description" content={desc} />
      <meta property="og:site_name" content="" />
      <meta property="og:url" content="" />


      <meta name="twitter:card" content="player"></meta>
      <meta name="twitter:url" content={Fav}/>
      <meta name="twitter:title" content={desc} />
      <meta name="twitter:image" content=""/>



      <link rel="icon" type="image/png" href={Fav} />
      <meta property="og:image" content="" />

      <link rel="apple-touch-icon" sizes="180x180" href={Apple} />
      <link rel="icon" type="image/png" sizes="32x32" href={FavMd} />
      <link rel="icon" type="image/png" sizes="16x16" href={FavSm} />
    </Head>
  );
};
export default Meta;
