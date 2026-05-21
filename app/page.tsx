import { Footer } from "@/components/Footer";
import { ForWhom } from "@/components/ForWhom";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Pillars } from "@/components/Pillars";
import { Proof } from "@/components/Proof";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Termine } from "@/components/Termine";
import { Trainer } from "@/components/Trainer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Proof />
      <ForWhom />
      <Pillars />
      <Trainer />
      <Termine />
      <Footer />
      <RevealOnScroll />
    </>
  );
}
