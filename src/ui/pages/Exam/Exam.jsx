import ContactCard from 'src/ui/components/Cards/ContactCard';
import HeroExam from 'src/ui/components/Heros/HeroExam';
import Footer from 'src/ui/components/Layout/Footer';
import Header from 'src/ui/components/Layout/Header/Header';
import Navbar from 'src/ui/components/Layout/Header/Navbar';
import AdvantagesExam from 'src/ui/components/Sections/AdvantagesExam';
import FeedBacksBg from 'src/ui/components/Sections/FeedBacksBg';
import ForWhoExam from 'src/ui/components/Sections/ForWhoExam';
import OpportunityExam from 'src/ui/components/Sections/OpportunityExam';
import OurUsers from 'src/ui/components/Sections/OurUsers';
import PriceComparison from 'src/ui/components/Sections/PriceComparison';
import Pricing from 'src/ui/components/Sections/Pricing';
import StatisticsExam from 'src/ui/components/Sections/StatisticExam';

const Exam = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Header />
      </div>
      <Navbar />
      <HeroExam />
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <OpportunityExam />
        <ForWhoExam />
        <StatisticsExam />
        <AdvantagesExam />
        <OurUsers bgColor="bg-success-12" />
      </div>
      <FeedBacksBg bgColor="bg-success-12" />
      <Pricing bgColor="bg-success-100" borderColor="border-success-100" />
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <PriceComparison bgColor="#E0F9E7" />
        <ContactCard />
      </div>
      <Footer />
    </>
  );
};

export default Exam;
