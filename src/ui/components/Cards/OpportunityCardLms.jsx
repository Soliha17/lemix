import supportImg from 'src/assets/images/img__lms-opp-card.png';
import tableImg from 'src/assets/images/table__opp-lms.png';

const OpportunityCardLms = () => {
  return (
    <div className="flex w-full flex-col-reverse items-center gap-10 rounded-3xl bg-primary-12 p-6 sm:p-9 md:flex-row xl:p-16">
      <div className="w-full md:w-1/2">
        <h3 className="mb-4 text-xl font-semibold text-black-100 sm:text-4xl md:mb-6">
          Ta&apos;lim tizimini raqamlarda boshqaring
        </h3>
        <p className="text-base leading-6 text-black-75">
          O&apos;quv markazlari uchun avtomatlashtiruvchi LMS (Learning Management System) tizimlari
          o&apos;quv jarayonini boshqarish, o&apos;quvchilarni baholash va o&apos;quv materiallarini
          taqdim etish uchun yaxshi imkoniyatlar beradi.
        </p>
      </div>
      <div className="relative">
        <p className="p__opp-lms absolute -top-4 left-1/2 -translate-x-1/2 rotate-12 rounded-2xl bg-primary-25 px-7 py-2 text-white-main">
          Boshqaruv
        </p>
        <img src={tableImg} alt="tableImg" />
        <img
          className="biznesmen-img__erp absolute -bottom-8 -left-4 sm:-left-8 md:-left-12"
          src={supportImg}
          alt="supportImg"
        />
      </div>
    </div>
  );
};

export default OpportunityCardLms;
