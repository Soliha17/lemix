import heroImg from 'src/assets/images/hero-erp-img.png';

const HeroErp = () => {
  return (
    <div id="general" className="hero-erp bg-neo-75 bg-no-repeat py-6 md:py-14 xl:py-20">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-9 px-5 sm:flex-row md:px-10">
        <div className="flex w-full flex-col items-start gap-6 sm:w-9/12 lg:w-1/2">
          <h1 className="text-5xl font-semibold text-black-100 lg:text-6xl">Lemix ERP</h1>
          <p className="text-base text-black-75">
            O&apos;quv markazlari uchun avtomatlashtiruvchi LMS (Learning Management System)
            tizimlari o&apos;quv jarayonini boshqarish, o&apos;quvchilarni baholash va o&apos;quv
            materiallarini taqdim etish uchun yaxshi imkoniyatlar beradi.
          </p>
          <button className="w-full rounded-2xl bg-white-main px-9 py-4 font-semibold text-primary-100 hover:bg-neo-100 sm:w-auto">
            Bepul foydalanish
          </button>
        </div>
        <div className="card__hero-erp">
          <img src={heroImg} alt="heroImg" />
        </div>
      </div>
    </div>
  );
};

export default HeroErp;
