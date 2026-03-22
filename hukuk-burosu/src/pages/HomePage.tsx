import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import PracticeAreas from "../components/home/PracticeAreas";
import Statistics from "../components/home/Statistics";
import FeaturedArticles from "../components/home/FeaturedArticles";
import CTA from "../components/home/CTA";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F5F3EF]">
      <Header />
      <main>
        <Hero />
        <Statistics />
        <PracticeAreas />
        <FeaturedArticles />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}