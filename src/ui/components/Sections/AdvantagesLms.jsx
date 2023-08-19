import SectionName from '../atoms/SectionName';
import Advantage2CardLms from '../Cards/Advantage2CardLms';
import AdvantageCardLms from '../Cards/AdvantageCardLms';

import firstCardImg from 'src/assets/images/first-img__lms-advantages.png';
import secondCardImg from 'src/assets/images/card-img__ad-lms.png';
import thirdCardImg from 'src/assets/images/second-img__ad-lms.png';

const AdvantagesLms = () => {
  return (
    <div id="advantages" className="mt-16 md:mt-24 lg:mt-20">
      <SectionName name="Afzalliklarimiz" />
      <div>
        <AdvantageCardLms
          title="Interaktiv ta'lim"
          text="O'quv markazlari uchun avtomatlashtiruvchi LMS (Learning Management System) tizimlari o'quv jarayonini boshqarish, o'quvchilarni baholash va o'quv materiallarini taqdim etish uchun yaxshi imkoniyatlar beradi."
          img={firstCardImg}
        />
        <Advantage2CardLms
          title="Qulay nazorat"
          text="O'quv markazlari uchun avtomatlashtiruvchi LMS (Learning Management System) tizimlari o'quv jarayonini boshqarish, o'quvchilarni baholash va o'quv materiallarini taqdim etish uchun yaxshi imkoniyatlar beradi."
          img={secondCardImg}
        />
        <AdvantageCardLms
          title="Giprit ta'lim"
          text="O'quv markazlari uchun avtomatlashtiruvchi LMS (Learning Management System) tizimlari o'quv jarayonini boshqarish, o'quvchilarni baholash va o'quv materiallarini taqdim etish uchun yaxshi imkoniyatlar beradi."
          img={thirdCardImg}
        />
      </div>
    </div>
  );
};

export default AdvantagesLms;
