import HeroErp from 'src/ui/components/Heros/HeroErp/HeroErp';
import Footer from 'src/ui/components/Layout/Footer';
import Header from 'src/ui/components/Layout/Header/Header';

const Erp = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Header />
      </div>
      <HeroErp />
      <Footer />
    </>
  );
};

export default Erp;
