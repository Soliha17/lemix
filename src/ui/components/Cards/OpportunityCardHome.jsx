import BlackOutlineBtn from '../Atoms/BlackButton';
import WhiteButton from '../Atoms/WhiteButton';
import opportunityTable from 'src/assets/images/opportunity-table.png';

const OpportunityCardHome = () => {
  return (
    <div className="opportunity-card flex w-full flex-col items-end rounded-3xl bg-primary-12 bg-no-repeat lg:flex-row lg:items-center">
      <div className="p-6 sm:p-9 lg:pr-0 xl:p-16">
        <div className="mb-16 md:mb-24 lg:mb-48">
          <h2 className="mb-4 text-2xl font-semibold md:text-3xl lg:mb-6 lg:text-4xl">
            CRM(Sotuv bo&apos;limi)
          </h2>
          <p className="text-sm lg:text-base">
            O&apos;quv markazlari uchun avtomatlashtiruvchi LMS (Learning Management System)
            tizimlari o&apos;quv jarayonini boshqarish, o&apos;quvchilarni baholash va o&apos;quv
            materiallarini taqdim etish uchun yaxshi imkoniyatlar beradi.
          </p>
        </div>
        <div className="flex flex-col gap-6 sm:gap-4 lg:flex-row">
          <WhiteButton text="Bepul foydalanish" />
          <BlackOutlineBtn text="Batafsil" />
        </div>
      </div>
      <img
        className="max-w-sm p-8 pr-0 sm:max-w-lg sm:pr-0 md:p-9 md:pr-0 lg:p-20 lg:pr-0 xl:max-w-2xl"
        src={opportunityTable}
        alt="opportunityTable"
      />
    </div>
  );
};

export default OpportunityCardHome;
