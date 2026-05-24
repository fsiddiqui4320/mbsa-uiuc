import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Mission from "@/components/Mission";
import Stats from "@/components/Stats";
import Board from "@/components/Board";
import Partners from "@/components/Partners";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <Mission />
        <Stats />
        <Board />
        <Partners />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
