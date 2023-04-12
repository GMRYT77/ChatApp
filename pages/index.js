import ChatArea from "@/components/ChatArea";
import Menubar from "@/components/Menubar";
import Sidebar from "@/components/Sidebar";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const useUser = () => ({ user: "null", loading: false });

export default function Home() {
  const { user, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!(user || loading)) {
      router.push("/login");
    }
  }, [user, loading]);

  return (
    <>
      <main className="hidden sm:flex overflow-x-auto min-w-[700px] overflow-y-hidden scrolly max-w-[1440px] mx-auto">
        <Head>
          <title>ChatApp | Home</title>
          <meta name="description" content="ChatApp Bolte" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
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
    </>
  );
}
