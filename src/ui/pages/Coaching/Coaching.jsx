import Header from 'src/ui/components/Layout/Header/Header';
import HeroCoaching from 'src/ui/components/Heros/HeroCoaching';
import Footer from 'src/ui/components/Layout/Footer';

const Coaching = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Header />
        <HeroCoaching />
      </div>
      <Footer />
    </div>
  );
};

export default Coaching;
