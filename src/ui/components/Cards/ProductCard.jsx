import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import nft from 'src/assets/images/nft-marketplace.png';

import ContactModal from '../atoms/ContactModal';
import WhiteButton from 'src/ui/components/atoms/WhiteButton';
import BlackOutlineBtn from 'src/ui/components/atoms/BlackOutlineBtn';

const ProductCard = () => {
  const { t } = useTranslation();

  const [openContactModal, setOpenContactModal] = useState(false);

  return (
    <div className="product-card relative mt-6 flex justify-start rounded-3xl bg-primary-25 bg-no-repeat p-6 sm:p-8 md:mt-8 md:p-9 lg:mt-14 lg:p-16">
      <div className="info-col__product-card flex flex-col gap-12 sm:gap-28">
        <div className="title-group__hero-home">
          <h1 className="whitespace-pre-line text-3xl font-semibold text-black-100 lg:text-5xl">
            {t('systematicallyPerfectYourEducation')}
          </h1>
          <p className="p1 mt-5 w-full text-black-100 md:w-1/2">{t('lmsDesc')}</p>
        </div>
        <div className="flex flex-col gap-6 sm:flex-row">
          <WhiteButton setOpen={setOpenContactModal} text="freeToUse" />
          <BlackOutlineBtn setOpen={setOpenContactModal} text="more" />
        </div>
      </div>
      <img src={nft} alt="dashboard" className="nft-img__product-card" />
      <ContactModal open={openContactModal} setOpen={setOpenContactModal} />
    </div>
  );
};

export default ProductCard;
