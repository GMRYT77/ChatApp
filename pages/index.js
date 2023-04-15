import ChatArea from "@/components/ChatArea";
import Menubar from "@/components/Menubar";
import Sidebar from "@/components/Sidebar";
import Head from "next/head";
import Link from "next/link";
import { lazy } from "react";

import { useRouter } from "next/router";
import { useEffect } from "react";
import { Suspense } from "react";
import Image from "next/image";

const useUser = () => ({ user: null, loading: false });

export default function Home() {
  const { user, loading } = useUser();
  const router = useRouter();

  const hideProfilePic = () => {
    const dpBg = document.getElementById("DP_BG");
    const dp = document.getElementById("DP_ID");
    dpBg.classList.add("hidden");
    dp.classList.add("hidden");
  };
  useEffect(() => {
    if (!(user || loading)) {
      router.push("/login");
    }
  }, [user, loading]);
  useEffect(() => {
    setTimeout(() => {
      const loadsc = document.getElementById("loadsc");
      loadsc.classList.add("hidden");
    }, 2000);
  });
  return (
    <section className="overflow-hidden">
      <section
        id="loadsc"
        className=" fixed w-[100vw] h-[100vh] bg-[#f6f6f6] z-[9999] flex justify-center items-center"
      >
        <div className="relative flex flex-col gap-10 items-center min-w-[80vw] max-w-[500px]">
          <div className="w-[20vw] relative aspect-square max-w-[80px] ">
            <Image src="/favicon.svg" layout="fill" objectFit="cover" alt="" />
          </div>
          <div class="loader-line max-w-[500px]"></div>
        </div>
      </section>
      <Suspense fallback={<Loading />}>
        <section>
          <section
            id="DP_BG"
            onClick={hideProfilePic}
            className="fixed w-[100vw] h-[100vh] bg-[#828282]/50 z-[100] backdrop-blur-lg hidden cursor-pointer"
          ></section>

          <main className="hidden sm:flex overflow-x-auto min-w-[800px] overflow-y-hidden scrolly max-w-[1440px] mx-auto">
            <Head>
              <title>ChatApp | Home</title>
              <meta name="description" content="ChatApp Bolte" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
              <link rel="icon" href="/favicon.svg" />
            </Head>

            <Sidebar />
            <Menubar />
            <ChatArea />
          </main>
          <Link
            href="/login"
            className="w-full h-[100vh] text-center text-2xl font-bold outfit sm:hidden flex"
          >
            Sorry But Mobile Preview Is not Available now
          </Link>
        </section>
      </Suspense>
    </section>
  );
}
function Loading() {
  return <h2>🌀 Loading...</h2>;
}
