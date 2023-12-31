import AboutCard from 'src/ui/components/Cards/AboutCard';
import HeroHome from 'src/ui/components/Heros/HeroHome';
import Footer from 'src/ui/components/Layout/Footer';
import Header from 'src/ui/components/Layout/Header/Header';
import FeedBacks from 'src/ui/components/Sections/FeedBacks';
import OpportunityHome from 'src/ui/components/Sections/OpportunityHome';
import ProductHome from 'src/ui/components/Sections/ProductHome';
import Statistics from 'src/ui/components/Sections/Statistics';

const Home = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Header />
        <HeroHome />
        <ProductHome />
        <Statistics />
        <OpportunityHome />
        <FeedBacks />
        <AboutCard />
      </div>
      <Footer />
    </>
  );
};

export default Home;
