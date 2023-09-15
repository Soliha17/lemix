import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import BlackOutlineBtn from 'src/ui/components/atoms/BlackOutlineBtn';
import WhiteButton from 'src/ui/components/atoms/WhiteButton';
import VideoModal from '../atoms/VideoModal';
import ContactModal from '../atoms/ContactModal';

import aboutVideo from 'src/assets/images/about-card-img.svg';

const AboutCard = () => {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const [openContactModal, setOpenContactModal] = useState(false);

  return (
    <div className="mt-16 md:mt-24 lg:mt-20">
      <div className="about-card flex w-full flex-col items-end rounded-3xl bg-neo-100 bg-no-repeat lg:flex-row lg:items-center">
        <div className="p-6 sm:p-9 lg:pr-0 xl:p-16">
          <div className="mb-16 md:mb-24 lg:mb-48">
            <h2 className="mb-4 text-2xl font-semibold md:text-3xl lg:mb-6 lg:text-4xl">
              {t('aboutUs')}
            </h2>
            <p className="text-sm lg:text-base">{t('aboutDesc')}</p>
          </div>
          <div className="flex flex-col gap-6 sm:gap-4 lg:flex-row">
            <WhiteButton setOpen={setOpenContactModal} text="freeToUse" />
            <BlackOutlineBtn setOpen={setOpenContactModal} text="getAdvice" />
          </div>
        </div>
        <img
          className="rounded-r-none sm:rounded-r-3xl"
          onClick={() => setOpen(true)}
          src={aboutVideo}
          alt="about video"
          width={808}
          height={808}
        />
      </div>
      <VideoModal open={open} setOpen={setOpen} videoId={'Do4UdiGvivU'} />
      <ContactModal open={openContactModal} setOpen={setOpenContactModal} />
    </div>
  );
};

export default AboutCard;
