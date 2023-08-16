import phone from 'src/assets/images/phone__easy-app.png';

const EasyAppCardLms = ({ setOpen }) => {
  return (
    <div className="easy-app-card__lms flex w-full flex-col gap-6 rounded-3xl bg-primary-75 bg-no-repeat p-6 pb-0 md:flex-row md:p-8 md:pb-0 xl:p-20 xl:pb-0">
      <div className="info-col__product-card flex flex-col gap-12 sm:gap-28">
        <div className="title-group__hero-home">
          <h1 className="text-3xl font-semibold text-white-main lg:text-5xl">Qulay mobil ulova</h1>
          <p className="p1 mt-5 w-full text-white-main lg:w-3/4">
            O&apos;quv markazlari uchun avtomatlashtiruvchi LMS (Learning Management System)
            tizimlari o&apos;quv jarayonini boshqarish, o&apos;quvchilarni baholash va o&apos;quv
            materiallarini taqdim etish uchun yaxshi imkoniyatlar beradi.
          </p>
        </div>
        <div className="mb-0 mt-auto flex flex-col gap-6 sm:flex-row md:mb-8 xl:mb-20">
          <button className="rounded-2xl bg-white-main px-9 py-4 font-semibold text-black-100 hover:bg-neo-100">
            Maslahat olish
          </button>
          <button
            onClick={() => setOpen(true)}
            className="rounded-2xl border border-white-main px-9 py-4 font-semibold text-white-main hover:border-black-0 hover:bg-black-100 hover:text-white-main"
          >
            Bepul foydalanish
          </button>
        </div>
      </div>
      <div className="phone-img__easy-app">
        <img src={phone} alt="phone" />
      </div>
    </div>
  );
};

export default EasyAppCardLms;
