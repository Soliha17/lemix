import HeroExam from 'src/ui/components/Heros/HeroExam';
import Header from 'src/ui/components/Layout/Header/Header';
import AdvantagesExam from 'src/ui/components/Sections/AdvantagesExam';
import FeedBacksBg from 'src/ui/components/Sections/FeedBacksBg';
import ForWhoExam from 'src/ui/components/Sections/ForWhoExam';
import OpportunityExam from 'src/ui/components/Sections/OpportunityExam';
import OurUsers from 'src/ui/components/Sections/OurUsers';
import StatisticsExam from 'src/ui/components/Sections/StatisticExam';

const Exam = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Header />
      </div>
      <HeroExam />
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <OpportunityExam />
        <ForWhoExam />
        <StatisticsExam />
        <AdvantagesExam />
        <OurUsers bgColor="bg-success-12" />
      </div>
      <FeedBacksBg bgColor="bg-success-12" />
    </>
  );
};

export default Exam;
