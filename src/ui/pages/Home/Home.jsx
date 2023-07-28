// import { useTranslation } from "react-i18next"

import HeroHome from 'src/ui/components/Heros/HeroHome/HeroHome';
import Header from 'src/ui/components/Layout/Header/Header';
import FeedBacks from 'src/ui/components/Sections/FeedBacks';
import ProductHome from 'src/ui/components/Sections/ProductHome';
import Statistics from 'src/ui/components/Sections/Statistics';

const Home = () => {
  // const {t} = useTranslation()
  return (
    <div className="mx-auto max-w-7xl px-5 md:px-10">
      <Header />
      <HeroHome />
      <ProductHome />
      <Statistics />
      <FeedBacks />
    </div>
  );
};

export default Home;
