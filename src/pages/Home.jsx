import Footer from "../components/Hero/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col justify-between">
        <Navbar />
        <Hero />
        <Footer />
        </div>
    )
}