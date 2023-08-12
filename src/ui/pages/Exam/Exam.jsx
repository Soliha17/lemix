import HeroExam from 'src/ui/components/Heros/HeroExam';
import Header from 'src/ui/components/Layout/Header/Header';
import ForWhoExam from 'src/ui/components/Sections/ForWhoExam';
import OpportunityExam from 'src/ui/components/Sections/OpportunityExam';

const Exam = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Header />
      </div>
      <HeroExam />
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <OpportunityExam />
        <ForWhoExam/>
      </div>
    </>
  );
};

export default Exam;
