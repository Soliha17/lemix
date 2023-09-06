import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import heroImg from 'src/assets/images/hero-erp-img.png';

import VideoModal from '../atoms/VideoModal';
import ContactModal from '../atoms/ContactModal';

const HeroErp = () => {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const [openContactModal, setOpenContactModal] = useState(false);

  return (
    <div id="general" className="hero-erp mt-10 bg-neo-75 bg-no-repeat py-6 md:py-14 xl:py-20">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-9 px-5 sm:flex-row md:px-10">
        <div className="flex w-full flex-col items-start gap-6 sm:w-9/12 lg:w-1/2">
          <h1 className="text-5xl font-semibold text-black-100 lg:text-6xl">Lemix ERP</h1>
          <p className="text-base text-black-75">{t('lmsDesc')}</p>
          <button
            onClick={() => setOpenContactModal(!openContactModal)}
            className="w-full rounded-2xl bg-white-main px-9 py-4 font-semibold text-primary-100 hover:bg-neo-100 sm:w-auto"
          >
            {t('freeToUse')}
          </button>
        </div>
        <div className="card__hero-erp">
          <img src={heroImg} onClick={() => setOpen(true)} alt="heroImg" />
        </div>
      </div>
      <VideoModal open={open} setOpen={setOpen} videoId={'Do4UdiGvivU'} />
      <ContactModal open={openContactModal} setOpen={setOpenContactModal} />
    </div>
  );
};

export default HeroErp;
