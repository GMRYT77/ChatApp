import ChatArea from "@/components/ChatArea";
import Menubar from "@/components/Menubar";
import Sidebar from "@/components/Sidebar";
import Head from "next/head";
import Link from "next/link";

import { useRouter } from "next/router";
import { useEffect } from "react";
import { Suspense } from "react";
import Image from "next/image";

export default function Home(props) {
  const hideProfilePic = () => {
    const dpBg = document.getElementById("DP_BG");
    const dp = document.getElementById("DP_ID");
    dpBg.classList.add("hidden");
    dp.classList.add("hidden");
  };

  const useUser = () => ({ userr: props.user, loading: false });
  const { userr, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!(userr || loading)) {
      router.push("/login");
    } else if (!(userr || loading)) {
      return;
    }
  }, [userr, loading]);
  console.log(props.user);
  return (
    <div>
      {props.user ? (
        <section className="overflow-hidden">
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

                <Sidebar
                  so={props.signOut}
                  name={props.user.displayName}
                  photoUrl={props.user.photoURL}
                />
                <Menubar />
                <ChatArea
                  name={props.user.displayName}
                  photoUrl={props.user.photoURL}
                />
              </main>
              <Link
                href="/text"
                className="w-full h-[100vh] text-center text-2xl font-bold outfit sm:hidden flex"
              >
                Sorry But Mobile Preview Is not Available now
              </Link>
            </section>
          </Suspense>
        </section>
      ) : (
        <button onClick={props.signIn}>Sign In</button>
      )}
    </div>
  );
}
function Loading() {
  return (
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
  );
}
