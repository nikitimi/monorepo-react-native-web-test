import Head from "next/head";
import { hello } from "../../../../message";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen bg-blue-400 text-2xl text-white">
        <h1 className="text-center font-black text-black">Web</h1>
        <p>{hello}</p>
      </main>
    </>
  );
}
