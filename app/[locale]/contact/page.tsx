import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Events from "@/components/sections/Contact/Events";
import ContactInquiryForm from "@/components/sections/Contact/ContactInquiryForm";
export default function Page() {
  return (
    <main className="min-h-screen  text-white">

      <Navbar />
      <ContactInquiryForm />
      <Events />
      {/* <Contact /> */}
      <Footer />
    </main>
  );
}