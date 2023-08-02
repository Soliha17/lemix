import HeroImg from '../../Cards/HeroimgCard';
import rightArrow from 'src/assets/images/right-blue-arrow.svg';

import dashboard from 'src/assets/images/dashboard-img__home-hero.png';
import student from 'src/assets/images/student.png';
import students from 'src/assets/images/students.png';

const HeroHome = () => {
  return (
    <div className="hero-home relative mt-6 flex justify-start rounded-3xl bg-primary-100 bg-no-repeat p-6 sm:p-8 md:mt-8 md:p-9 lg:mt-14 lg:p-16">
      <div className="card-group__hero-home">
        <HeroImg classname="img-card--first" img={student} title="O'quv markazlar" />
        <HeroImg classname="img-card--second" img={students} title="Maktablar" />
      </div>
      <img src={dashboard} alt="dashboard" className="dashboard-img__hero-home" />
      <div className="info-col__hero-home flex flex-col gap-12 sm:gap-28">
        <div className="title-group__hero-home">
          <h1 className="text-5xl font-semibold text-white-main lg:text-6xl">
            Ta&apos;limni tizimli <br /> yuksaltiring
          </h1>
          <p className="p1 mt-5 font-light text-white-main">BARCHASI TEZ, ODDIY VA INNOVATSION</p>
        </div>
        <div>
          <button className="demo-btn__hero-home flex gap-4 rounded-2xl bg-white-main px-9 py-4 text-primary-100 hover:bg-neo-100">
            Demo foydalanish <img src={rightArrow} alt="right arrow" />
          </button>
          <p className="p1 mt-2 leading-6 text-white-main">
            Bepulga demo versiyadan <br /> foydalanib ko&apos;ring
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
