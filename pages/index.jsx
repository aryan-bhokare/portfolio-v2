import Head from "next/head";

import Hero from "@/components/Hero";
import About from "@/components/About";
import TimeLine from "@/components/TimeLine";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aryan Bhokare — Backend &amp; AI Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <About />
      <TimeLine />
      <Projects />
      <Stack />
      <Contact />
    </>
  );
}
