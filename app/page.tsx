import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Work from "./components/Work";
import Pressroom from "./components/Pressroom";
import Services from "./components/Services";
import Visit from "./components/Visit";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <main className="relative grain">
      <Nav />
      <Hero />
      <Marquee />
      <Work />
      <Pressroom />
      <Services />
      <Visit />
      <Footer />
    </main>
  );
}
