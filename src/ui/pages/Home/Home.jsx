// import { useTranslation } from "react-i18next"

import HeroHome from 'src/ui/components/Heros/HeroHome/HeroHome';
import Header from 'src/ui/components/Layout/Header/Header';

// import Header from "../../components/Layout/Header/Header";

const Home = () => {
  // const {t} = useTranslation()
  return (
    <div className="mx-auto max-w-7xl px-5 md:px-10">
      <Header />
      <HeroHome />
    </div>
  );
};

export default Home;
