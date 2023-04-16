import Head from "next/head";
import React from "react";

const Seo = (props) => {
  return (
    <Head>
      <title>{props.page}</title>
      <meta name="description" content={props.desc} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.svg" />
    </Head>
  );
};

export default Seo;

Seo.defaultProps = {
  page: "Need Page Info",
  desc: "Please chech the Seo.js for this compo",
};
