import HeroErp from 'src/ui/components/Heros/HeroErp/HeroErp';
import Footer from 'src/ui/components/Layout/Footer';
import Header from 'src/ui/components/Layout/Header/Header';
import OpportunityErp from 'src/ui/components/Sections/OpportunityErp';
import OurUsers from 'src/ui/components/Sections/OurUsers';
import Statistics from 'src/ui/components/Sections/Statistics';

const Erp = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Header />
      </div>
      <HeroErp />
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <OurUsers />
        <OpportunityErp />
        <Statistics />
      </div>
      <Footer />
    </>
  );
};

export default Erp;
