import { useTranslation } from 'react-i18next';

import SectionName from 'src/ui/components/atoms/SectionName';
import supportImg from 'src/assets/images/support-img__erp.png';
import tableImg from 'src/assets/images/opportunity-table__erp.png';

const OpportunityCardErp = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full rounded-3xl bg-primary-12 p-6 sm:p-9 xl:p-20">
      <SectionName name="opportunities" />
      <div className="opp-card__erp mt-20 flex flex-col-reverse items-center gap-10 rounded-3xl bg-white-main p-6 sm:p-9 md:flex-row xl:p-16">
        <div className="w-full md:w-1/2">
          <h3 className="mb-4 text-xl font-semibold text-black-100 sm:text-4xl md:mb-6">
            {t('sale')}
          </h3>
          <p className="text-base leading-6 text-black-75">{t('lmsDesc')}</p>
        </div>
        <div className="relative">
          <p className="absolute -right-8 -top-12 z-10 rotate-12 whitespace-pre-line rounded-2xl bg-primary-25 px-7 py-2 text-white-main md:-right-5 md:-top-3">
            {t('controlOfTheSalesDepartment')}
          </p>
          <img src={tableImg} alt="tableImg" width={398} height={243} />
          <img
            className="support-img__erp absolute -bottom-8 -left-4"
            src={supportImg}
            alt="supportImg"
            width={237}
            height={175}
          />
        </div>
      </div>
    </div>
  );
};

export default OpportunityCardErp;
