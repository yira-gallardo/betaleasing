import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ServiceGoal from "./components/ServiceGoal";
import Steps from "./components/Steps";
import Clients from "./components/Clients";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-[#f7f7f7] min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col gap-0">
        <Hero />
        <Features />
        <ServiceGoal />
        <Steps />
        <Clients />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
