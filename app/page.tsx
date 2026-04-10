import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Home/Hero";
import Product from "@/components/sections/Home/Product";
import Benefits from "@/components/sections/Home/Benefits";
import References from "@/components/sections/Home/References";
import LogosFooter from "@/components/layout/LogosFooter";
export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Product />
      <Benefits />
      <References />
      <LogosFooter />

      <Footer />
    </main>
  );
}