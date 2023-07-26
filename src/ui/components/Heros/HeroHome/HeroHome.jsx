import rightArrow from 'src/assets/images/right-black-arrow.svg';
import HeroImg from './HeroimgCard';
import student from 'src/assets/images/student.png';
import students from 'src/assets/images/students.png';

const HeroHome = () => {
  return (
    <div
      className="hero-home relative m-6 mx-auto flex max-w-7xl flex-col justify-start gap-12 rounded-3xl bg-primary-100 bg-no-repeat p-6 sm:mt-8 sm:gap-28 sm:p-8 md:mt-11 md:p-14"
      style={{
        backgroundImage:
          'url("src/assets/images/top-line__home-hero.png"), url("src/assets/images/bottom-line__home-hero.png")',
        backgroundPosition: 'top right, bottom left',
      }}
    >
      <div>
        <HeroImg classname="img-card--first" img={student} title="O'quv markazlar" />
        <HeroImg classname="img-card--second" img={students} title="Maktablar" />
      </div>
      <div className="title-group__hero-home">
        <h1 className="font-semibold text-white-main">
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
  );
};

export default HeroHome;
