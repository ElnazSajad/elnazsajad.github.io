import { LightboxProvider } from "@/components/Lightbox";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Work } from "@/components/site/Work";

export default function App() {
  return (
    <LightboxProvider>
      <Header />
      <main id="top">
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
    </LightboxProvider>
  );
}
