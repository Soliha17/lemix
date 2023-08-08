import SectionName from '../Atoms/SectionName';

import supportImg from 'src/assets/images/support-img__erp.png';
import tableImg from 'src/assets/images/opportunity-table__erp.png';

const OpportunityCardErp = () => {
  return (
    <div className="w-full rounded-3xl bg-primary-12 p-6 sm:p-9 xl:p-20">
      <SectionName name="Imkoniyatlar" />
      <div className="mt-10 flex flex-col-reverse items-center gap-10 rounded-3xl bg-white-main p-6 sm:p-9 md:flex-row xl:p-16">
        <div className="w-full md:w-1/2">
          <h3 className="mb-4 text-xl font-semibold text-black-100 sm:text-4xl md:mb-6">Sotuv</h3>
          <p className="text-base leading-6 text-black-75">
            O&apos;quv markazlari uchun avtomatlashtiruvchi LMS (Learning Management System)
            tizimlari o&apos;quv jarayonini boshqarish, o&apos;quvchilarni baholash va o&apos;quv
            materiallarini taqdim etish uchun yaxshi imkoniyatlar beradi.
          </p>
        </div>
        <div className="relative">
          <p className="absolute -right-8 -top-12 rotate-12 rounded-2xl bg-primary-25 px-7 py-2 text-white-main md:-right-5 md:-top-3">
            Sotuv bo&apos;limi <br /> nazorati
          </p>
          <img src={tableImg} alt="tableImg" />
          <img
            className="support-img__erp absolute -bottom-8 -left-4"
            src={supportImg}
            alt="supportImg"
          />
        </div>
      </div>
    </div>
  );
};

export default OpportunityCardErp;
