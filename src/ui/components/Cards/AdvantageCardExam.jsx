import { useTranslation } from 'react-i18next';

import table from 'src/assets/images/table__advantages-exam.png';

const AdvantageCardExam = () => {
  const { t } = useTranslation();

  return (
    <div className="flex w-full flex-col-reverse items-center gap-6 rounded-3xl bg-success-12 p-6 md:flex-row md:p-10 xl:p-20">
      <div className="w-full md:w-1/2">
        <h3 className="mb-4 text-xl font-semibold text-black-100 sm:text-4xl md:mb-6">
          {t('abilityToCreateATest')}
        </h3>
        <p className="text-base leading-6 text-black-75">{t('lmsDesc')}</p>
      </div>
      <div className="w-full sm:w-1/2">
        <img src={table} alt="table" />
      </div>
    </div>
  );
};

export default AdvantageCardExam;
