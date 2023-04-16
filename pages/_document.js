import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";

export default function Document() {
  return (
    <Html lang="en" id="html">
      <Head />
      <body className="bg-[#EFEDF2] dark:bg-[#1e1e1e] dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
