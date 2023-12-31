import { useTranslation } from 'react-i18next';

import CustomizedAccordions from 'src/ui/components/Moleculas/PriceAccordion';
import SectionName from 'src/ui/components/atoms/SectionName';

const PriceComparison = ({ bgColor }) => {
  const { t } = useTranslation();

  return (
    <div className="mt-16 md:mt-24 lg:mt-20">
      <div className="mb-8 flex flex-col items-center gap-8 xl:flex-row xl:justify-between xl:gap-0">
        <SectionName name="tariffsComparison" />
        <div className="flex flex-col gap-6 sm:flex-row">
          <span>
            <p className="text-center text-3xl text-black-100">{t('basic')}</p>
            <p className="text-base text-black-0">
              <b>199 000</b> {t('soumsMonth')}
            </p>
          </span>
          <span>
            <p className="text-center text-3xl text-black-100">{t('popular')}</p>
            <p className="text-base text-black-0">
              <b>399 000</b> {t('soumsMonth')}
            </p>
          </span>
          <span>
            <p className="text-center text-3xl text-black-100">{t('business')}</p>
            <p className="text-base text-black-0">
              <b>599 000</b> {t('soumsMonth')}
            </p>
          </span>
        </div>
      </div>
      <CustomizedAccordions bgColor={bgColor} />
    </div>
  );
};

export default PriceComparison;
