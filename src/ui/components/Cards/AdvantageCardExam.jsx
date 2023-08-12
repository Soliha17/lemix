import table from 'src/assets/images/table__advantages-exam.png';

const AdvantageCardExam = () => {
  return (
    <div className="flex w-full flex-col-reverse items-center gap-6 rounded-3xl bg-success-12 p-6 md:flex-row md:p-10 xl:p-20">
      <div className="w-full md:w-1/2">
        <h3 className="mb-4 text-xl font-semibold text-black-100 sm:text-4xl md:mb-6">
          Test yarata olish
        </h3>
        <p className="text-base leading-6 text-black-75">
          O&apos;quv markazlari uchun avtomatlashtiruvchi LMS (Learning Management System) tizimlari
          o&apos;quv jarayonini boshqarish, o&apos;quvchilarni baholash va o&apos;quv materiallarini
          taqdim etish uchun yaxshi imkoniyatlar beradi.
        </p>
      </div>
      <div className="w-full sm:w-1/2">
        <img src={table} alt="table" />
      </div>
    </div>
  );
};

export default AdvantageCardExam;
