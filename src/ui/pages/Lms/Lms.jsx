import ContactCard from 'src/ui/components/Cards/ContactCard';
import HeroLms from 'src/ui/components/Heros/HeroLms';
import Footer from 'src/ui/components/Layout/Footer';
import Header from 'src/ui/components/Layout/Header/Header';
import AdvantagesLms from 'src/ui/components/Sections/AdvantagesLms';
import EasyAppLms from 'src/ui/components/Sections/EasyAppLms';
import FeedBacksBg from 'src/ui/components/Sections/FeedBacksBg';
import OpportunityLms from 'src/ui/components/Sections/OpportunityLms';
import OurUsers from 'src/ui/components/Sections/OurUsers';
import PriceComparison from 'src/ui/components/Sections/PriceComparison';
import Pricing from 'src/ui/components/Sections/Pricing';
import Statistics from 'src/ui/components/Sections/Statistics';

const Lms = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Header />
      </div>
      <HeroLms />
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <OpportunityLms />
        <Statistics />
        <AdvantagesLms />
        <OurUsers bgColor="bg-primary-12" />
      </div>
      <FeedBacksBg bgColor="bg-primary-12" />
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <EasyAppLms />
        <Pricing bgColor={'bg-primary-100'} borderColor={'border-primary-100'} />
        <PriceComparison />
        <ContactCard />
      </div>
      <Footer />
    </>
  );
};

export default Lms;
