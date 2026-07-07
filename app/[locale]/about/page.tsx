
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import History from "@/components/sections/About/History";
import Team from "@/components/sections/About/Team";
import JoinUs from "@/components/sections/About/JoinUs";
export default function Page() {
  return (
    <main className="min-h-screen  text-white">
      <Navbar />
        <History />
        <Team />
        <JoinUs />
      <Footer />
    </main>
  );
}