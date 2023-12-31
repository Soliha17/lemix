import { useTranslation } from 'react-i18next';

import youTube from 'src/assets/images/you-tube.svg';
import telegram from 'src/assets/images/telegram.svg';
import instagram from 'src/assets/images/instagram.svg';
import facebook from 'src/assets/images/facebook.svg';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer mt-16 bg-black-100 bg-no-repeat pb-6 pt-8 md:mt-20 md:pb-8 md:pt-14 xl:mt-24">
      <div className="mx-auto max-w-7xl px-5 text-neo-75 md:px-10">
        <div className="mb-10 flex flex-wrap justify-between gap-11 sm:justify-start md:mb-14 md:gap-36">
          <div>
            <h6 className="mb-3 text-base font-bold text-white-main">Lemix</h6>
            <ul className="flex cursor-pointer flex-col gap-3 text-sm text-neo-100">
              <li className="hover:underline"> {t('products')} </li>
              <li className="hover:underline">{t('solutions')}</li>
              <li className="hover:underline">{t('resources')}</li>
            </ul>
          </div>
          <div>
            <h6 className="mb-3 text-base font-bold text-white-main">{t('contact')}</h6>
            <ul className="flex cursor-pointer flex-col gap-3 text-sm text-neo-100">
              <li className="hover:underline">+998 78 113-77-50</li>
              <li className="hover:underline">lemix.org@gmail.com</li>
            </ul>
          </div>
          <div>
            <h6 className="mb-3 text-base font-bold text-white-main"> {t('socialNetworks')} </h6>
            <ul className="flex cursor-pointer gap-3">
              <li>
                <img src={youTube} alt="youTube" width={24} height={24} loading="lazy" />
              </li>
              <li>
                <img src={telegram} alt="telegram" width={24} height={24} loading="lazy" />
              </li>
              <li>
                <img src={instagram} alt="instagram" width={24} height={24} loading="lazy" />
              </li>
              <li>
                <img src={facebook} alt="facebook" width={24} height={24} loading="lazy" />
              </li>
            </ul>
          </div>
        </div>
        <p className="border-t border-neo-75 pt-6 text-base font-medium md:pt-8">
          &copy; 2023 Lemix
        </p>
      </div>
    </div>
  );
};

export default Footer;
