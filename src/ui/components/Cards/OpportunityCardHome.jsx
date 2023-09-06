import { useTranslation } from 'react-i18next';

import BlackOutlineBtn from 'src/ui/components/atoms/BlackOutlineBtn';
import WhiteButton from 'src/ui/components/atoms/WhiteButton';
import opportunityTable from 'src/assets/images/opportunity-table.png';

const OpportunityCardHome = ({ setOpen }) => {
  const { t } = useTranslation();

  return (
    <div className="opportunity-card flex w-full flex-col items-end rounded-3xl bg-primary-12 bg-no-repeat lg:flex-row lg:items-center">
      <div className="p-6 sm:p-9 lg:pr-0 xl:p-16">
        <div className="mb-16 md:mb-24 lg:mb-48">
          <h2 className="mb-4 text-2xl font-semibold md:text-3xl lg:mb-6 lg:text-4xl">
            {t('crm')}
          </h2>
          <p className="text-sm lg:text-base">{t('lmsDesc')}</p>
        </div>
        <div className="flex flex-col gap-6 sm:gap-4 lg:flex-row">
          <WhiteButton setOpen={setOpen} text="freeToUse" />
          <BlackOutlineBtn setOpen={setOpen} text="more" />
        </div>
      </div>
      <img
        className="max-w-xs p-8 pr-0 sm:max-w-lg sm:pr-0 md:p-9 md:pr-0 lg:p-20 lg:pr-0 xl:max-w-2xl"
        src={opportunityTable}
        alt="opportunityTable"
      />
    </div>
  );
};

export default OpportunityCardHome;
