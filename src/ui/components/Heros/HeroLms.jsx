import { useState } from 'react';
import heroImg from 'src/assets/images/hero-img__lms.png';
import done from 'src/assets/images/done-icon__contact.svg';
import VideoModal from '../Atoms/VideoModal';
import ContactModal from '../Atoms/ContactModal';

const HeroLms = () => {
  const [open, setOpen] = useState(false);
  const [openContactModal, setOpenContactModal] = useState(false);

  return (
    <div id="general" className="hero-erp mt-10 bg-neo-75 bg-no-repeat py-6 md:py-14 xl:py-20">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-9 px-5 sm:flex-row md:px-10">
        <div className="flex w-full flex-col items-start gap-6 sm:w-9/12 lg:w-1/2">
          <h1 className="text-5xl font-semibold text-black-100 lg:text-6xl">Lemix LMS</h1>
          <p className="text-base text-black-75">
            O&apos;quv markazlari uchun avtomatlashtiruvchi LMS (Learning Management System)
            tizimlari o&apos;quv jarayonini boshqarish, o&apos;quvchilarni baholash va o&apos;quv
            materiallarini taqdim etish uchun yaxshi imkoniyatlar beradi.
          </p>
          <button
            onClick={() => setOpenContactModal(!openContactModal)}
            className="w-full rounded-2xl bg-primary-100 px-9 py-4 font-semibold text-white-main hover:bg-primary-75 sm:w-auto"
          >
            Bepul foydalanish
          </button>
        </div>
        <div className="card__hero-lms">
          <div className="circle__hero-lms -mb-16 -ml-3 sm:-mb-20 sm:-ml-10">
            <img src={done} alt="done icon" />
          </div>
          <img src={heroImg} onClick={() => setOpen(true)} alt="heroImg" />
        </div>
      </div>
      <VideoModal open={open} setOpen={setOpen} videoId={'Do4UdiGvivU'} />
      <ContactModal open={openContactModal} setOpen={setOpenContactModal} />
    </div>
  );
};

export default HeroLms;
