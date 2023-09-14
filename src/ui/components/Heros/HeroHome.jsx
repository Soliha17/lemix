import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import HeroImg from '../Cards/HeroimgCard';
import ContactModal from '../atoms/ContactModal';

import dashboard from 'src/assets/images/dashboard-img--hero-home.svg';
import student from 'src/assets/images/student1.svg';
import students from 'src/assets/images/students1.svg';
import rightArrow from 'src/assets/images/right-blue-arrow.svg';

const HeroHome = () => {
  const { t } = useTranslation();

  const [openContactModal, setOpenContactModal] = useState(false);

  return (
    <div className="hero-home relative mt-6 flex justify-start rounded-3xl bg-primary-100 bg-no-repeat p-6 sm:p-8 md:mt-8 md:p-9 lg:mt-14 lg:p-16">
      <div className="card-group__hero-home">
        <HeroImg classname="img-card--first" img={student} title="educationalCenters" />
        <HeroImg classname="img-card--second" img={students} title="schools" />
      </div>
      <img src={dashboard} alt="dashboard" className="dashboard-img__hero-home" />
      <div className="info-col__hero-home flex flex-col gap-12 sm:gap-28">
        <div className="title-group__hero-home">
          <h1 className="whitespace-pre-line text-4xl font-semibold text-white-main lg:text-6xl">
            {t('improveEducationSystematically')}
          </h1>
          <p className="p1 mt-5 font-light text-white-main"> {t('allFastSimpleAndInnovative')} </p>
        </div>
        <div>
          <button
            onClick={() => setOpenContactModal(!openContactModal)}
            className="demo-btn__hero-home flex gap-4 rounded-2xl bg-white-main px-9 py-4 text-primary-100 hover:bg-neo-100"
          >
            {t('demoUsage')} <img src={rightArrow} alt="right arrow" />
          </button>
          <p className="p1 mt-2 whitespace-pre-line leading-6 text-white-main">
            {t('tryTheDemoVersionForFree')}
          </p>
        </div>
      </div>
      <ContactModal open={openContactModal} setOpen={setOpenContactModal} />
    </div>
  );
};

export default HeroHome;
