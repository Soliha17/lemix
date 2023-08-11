import SectionName from 'src/ui/components/Atoms/SectionName';
import AdvantagesCard from 'src/ui/components/Cards/AdvantagesCard';

import dashboard from 'src/assets/images/advantages-dashboard.png';
import table from 'src/assets/images/table-advantages.png';

const AdvantagesErp = () => {
  return (
    <div className="mt-16 md:mt-24 lg:mt-20">
      <SectionName name="Afzalliklarimiz" />

      <div className="mt-6 flex flex-col gap-8 sm:flex-row md:mt-10">
        <div className="flex flex-col gap-8">
          <AdvantagesCard
            title="Interaktiv interfeys"
            text="O'quv markazlari uchun avtomatlashtiruvchi LMS (Learning Management System) tizimlari o'quv jarayonini boshqarish, o'quvchilarni baholash va o'quv materiallarini taqdim etish uchun yaxshi imkoniyatlar beradi."
            img={table}
          />
          <AdvantagesCard
            title="Muammolarni tez yecha olish"
            text="O'quv markazlari uchun avtomatlashtiruvchi LMS (Learning Management System) tizimlari o'quv jarayonini boshqarish, o'quvchilarni baholash va o'quv materiallarini taqdim etish uchun yaxshi imkoniyatlar beradi."
          />
        </div>
        <div className="flex flex-col-reverse gap-8 sm:flex-col">
          <AdvantagesCard
            title="Muammolarni tez yecha olish"
            text="O'quv markazlari uchun avtomatlashtiruvchi LMS (Learning Management System) tizimlari o'quv jarayonini boshqarish, o'quvchilarni baholash va o'quv materiallarini taqdim etish uchun yaxshi imkoniyatlar beradi."
          />
          <AdvantagesCard
            title="Doimiy statistika"
            text="O'quv markazlari uchun avtomatlashtiruvchi LMS (Learning Management System) tizimlari o'quv jarayonini boshqarish, o'quvchilarni baholash va o'quv materiallarini taqdim etish uchun yaxshi imkoniyatlar beradi."
            img={dashboard}
          />
        </div>
      </div>
    </div>
  );
};

export default AdvantagesErp;
