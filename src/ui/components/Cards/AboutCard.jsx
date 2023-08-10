import BlackOutlineBtn from '../Atoms/BlackButton';
import WhiteButton from '../Atoms/WhiteButton';

import aboutVideo from 'src/assets/images/about-video.png';

const AboutCard = () => {
  return (
    <div className="mt-16 md:mt-24 lg:mt-20">
      <div className="about-card flex w-full flex-col items-end rounded-3xl bg-neo-100 bg-no-repeat lg:flex-row lg:items-center">
        <div className="p-6 sm:p-9 lg:pr-0 xl:p-16">
          <div className="mb-16 md:mb-24 lg:mb-48">
            <h2 className="mb-4 text-2xl font-semibold md:text-3xl lg:mb-6 lg:text-4xl">
              Biz haqimizda
            </h2>
            <p className="text-sm lg:text-base">
              O&apos;quv markazlari uchun avtomatlashtiruvchi LMS (Learning Management System)
              tizimlari o&apos;quv jarayonini boshqarish, o&apos;quvchilarni baholash va o&apos;quv
              materiallarini taqdim etish uchun yaxshi imkoniyatlar beradi. O&apos;quv markazlari
              uchun avtomatlashtiruvchi LMS (Learning Management System) tizimlari o&apos;quv
              jarayonini boshqarish, o&apos;quvchilarni baholash va o&apos;quv materiallarini taqdim
              etish uchun yaxshi imkoniyatlar beradi.
            </p>
          </div>
          <div className="flex flex-col gap-6 sm:gap-4 lg:flex-row">
            <WhiteButton text="Bepul foydalanish" />
            <BlackOutlineBtn text="Maslahat olish" />
          </div>
        </div>
        <img className="rounded-r-none sm:rounded-r-3xl" src={aboutVideo} alt="about video" />
      </div>
    </div>
  );
};

export default AboutCard;
