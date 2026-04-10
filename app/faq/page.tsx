import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FAQ from "@/components/sections/FAQ/FAQ";
export default function Page() {
  return (
    <main className="min-h-screen  text-white">
      <Navbar />
      <FAQ />
      <Footer />
    </main>
  );
}