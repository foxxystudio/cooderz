import CodeBlock from "@/components/Home/CodeBlock/CodeBlock";
import Contact from "@/components/Home/Contact/Contact";
import Hero from "@/components/Home/Hero/Hero";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import WhatWeOffer from "@/components/Home/WhatWeOffer/WhatWeOffer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="home__container main__container">
      <Hero />
      <Testimonials />
      <WhatWeOffer />
      <CodeBlock />
      <Contact />
    </div>
  );
}
