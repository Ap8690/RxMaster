import Head from "next/head";
import PropTypes from "prop-types";

const SEO = ({ pageTitle }) => (
  <Head>
    <title> {pageTitle} </title>
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <meta
      name="description"
      content="A play and earn metaverse game that combines mobile game fun with web 3.0 economy"
    />
    <meta name="robots" content="noindex, follow" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <link rel="icon" href="/favicon.png" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="/script-tm.js" defer=""></script>

    <meta property="og:url" content="https://www.rx669series.io/" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="RX 669 : SERIES" />
    <meta
      property="og:description"
      content="A play and earn metaverse game that combines mobile game fun with web 3.0 economy"
    />
    <meta
      property="og:image"
      content="https://www.rx669series.io/favicon.png"
    />
  </Head>
);

SEO.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default SEO;
