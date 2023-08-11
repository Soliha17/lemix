import HeroLms from 'src/ui/components/Heros/HeroLms';
import Header from 'src/ui/components/Layout/Header/Header';
import AdvantagesLms from 'src/ui/components/Sections/AdvantagesLms';
import OpportunityLms from 'src/ui/components/Sections/OpportunityLms';
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
      </div>
    </>
  );
};

export default Lms;
