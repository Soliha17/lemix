import done from 'src/assets/images/done-icon__contact.svg';
import table from 'src/assets/images/table-advantages.png';
import playIcon from 'src/assets/images/play-video-icon.png';
import VideoModal from '../atoms/VideoModal';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ContactModal from '../atoms/ContactModal';

const HeroExam = () => {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const [openContactModal, setOpenContactModal] = useState(false);

  return (
    <div id="general" className="hero-exam mt-10 bg-success-12 bg-no-repeat py-6 md:py-14 xl:py-20">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-9 px-5 sm:flex-row md:px-10">
        <div className="flex w-full flex-col items-start gap-6 sm:w-9/12 lg:w-1/2">
          <h1 className="text-5xl font-semibold text-black-100 lg:text-6xl">Lemix Exam</h1>
          <p className="text-base text-black-75">{t('lmsDesc')}</p>
          <button
            onClick={() => setOpenContactModal(!openContactModal)}
            className="w-full rounded-2xl bg-success-100 px-9 py-4 font-semibold text-white-main hover:bg-primary-75 sm:w-auto"
          >
            {t('freeToUse')}
          </button>
        </div>
        <div className="relative mb-32">
          <img src={table} alt="table" width={457} height={279} />
          <div className="circle__hero-exam">
            <img src={done} alt="done icon" width={63} height={63} />
          </div>
          <div className="men-img__hero-exam">
            <img
              src={playIcon}
              onClick={() => setOpen(true)}
              width={80}
              height={80}
              alt="playIcon"
            />
          </div>
        </div>
      </div>
      <VideoModal open={open} setOpen={setOpen} videoId={'Do4UdiGvivU'} />
      <ContactModal open={openContactModal} setOpen={setOpenContactModal} />
    </div>
  );
};

export default HeroExam;
