import HeroLms from 'src/ui/components/Heros/HeroLms';
import Header from 'src/ui/components/Layout/Header/Header';
import AdvantagesLms from 'src/ui/components/Sections/AdvantagesLms';
import EasyAppLms from 'src/ui/components/Sections/EasyAppLms';
import FeedBacksBg from 'src/ui/components/Sections/FeedBacksBg';
import OpportunityLms from 'src/ui/components/Sections/OpportunityLms';
import OurUsers from 'src/ui/components/Sections/OurUsers';
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
        <OurUsers />
      </div>
      <FeedBacksBg />
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <EasyAppLms />
      </div>
    </>
  );
};

export default Lms;
