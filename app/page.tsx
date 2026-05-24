import { Footer } from "@/components/Footer";
import { ForWhom } from "@/components/ForWhom";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Newsletter } from "@/components/Newsletter";
import { Pillars } from "@/components/Pillars";
import { Proof } from "@/components/Proof";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Termine } from "@/components/Termine";
import { Trainer } from "@/components/Trainer";

const NEWSLETTER_ENABLED = false;

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
      {NEWSLETTER_ENABLED && <Newsletter />}
      <Footer />
      <RevealOnScroll />
    </>
  );
}
