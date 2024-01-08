import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Pricing from "./sections/Pricing";
import Testimonials from "./sections/Testimonials";

export default function App() {
  return (
    <h1 className="text-3xl font-bold">
      <Header />
      <Hero />
      <About />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </h1>
  )
}