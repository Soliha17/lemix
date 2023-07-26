// import { useTranslation } from "react-i18next"

import HeroHome from 'src/ui/components/Heros/HeroHome/HeroHome';
import Header from 'src/ui/components/Layout/Header/Header';
import dashboard from 'src/assets/images/dashboard-img__home-hero.png';

// import Header from "../../components/Layout/Header/Header";

const Home = () => {
  // const {t} = useTranslation()
  return (
    <div className="relative">
      <Header />
      <HeroHome />
      <img src={dashboard} alt="dashboard" className="dashboard-img__hero-home" />
    </div>
  );
};

export default Home;
