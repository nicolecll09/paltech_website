import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact/Events";
export default function Page() {
  return (
    <main className="min-h-screen  text-white">

      <Navbar />
      <Contact />
      <Footer />
    </main>
  );
}