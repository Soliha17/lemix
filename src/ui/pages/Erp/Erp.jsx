import Footer from 'src/ui/components/Layout/Footer';
import Header from 'src/ui/components/Layout/Header/Header';
import AllOneErp from 'src/ui/components/Sections/AllOneErp';
import FeedBacksBg from 'src/ui/components/Sections/FeedBacksBg';
import OpportunityErp from 'src/ui/components/Sections/OpportunityErp';
import OurUsers from 'src/ui/components/Sections/OurUsers';
import PriceComparison from 'src/ui/components/Sections/PriceComparison';
import Pricing from 'src/ui/components/Sections/Pricing';
import Statistics from 'src/ui/components/Sections/Statistics';
import ContactCard from '../../components/Cards/ContactCard';
import HeroErp from 'src/ui/components/Heros/HeroErp';
import AdvantagesErp from 'src/ui/components/Sections/AdvantagesErp';

const Erp = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Header />
      </div>
      <HeroErp />
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <OurUsers bgColor="bg-primary-12" />
        <OpportunityErp />
        <Statistics />
        <AdvantagesErp />
        <AllOneErp />
      </div>
      <FeedBacksBg bgColor="bg-primary-12" />
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Pricing />
        <PriceComparison />
        <ContactCard />
      </div>
      <Footer />
    </>
  );
};

export default Erp;
