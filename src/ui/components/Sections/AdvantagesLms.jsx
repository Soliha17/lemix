import SectionName from '../atoms/SectionName';
import Advantage2CardLms from '../Cards/Advantage2CardLms';
import AdvantageCardLms from '../Cards/AdvantageCardLms';

import firstCardImg from 'src/assets/images/first-img__lms-advantages.png';
import secondCardImg from 'src/assets/images/card-img__ad-lms.png';
import thirdCardImg from 'src/assets/images/second-img__ad-lms.png';

const AdvantagesLms = () => {
  return (
    <div id="advantages" className="mt-16 md:mt-24 lg:mt-20">
      <SectionName name="advantages" />
      <div>
        <AdvantageCardLms title="interactiveEducation" text="lmsDesc" img={firstCardImg} />
        <Advantage2CardLms title="convenientControl" text="lmsDesc" img={secondCardImg} />
        <AdvantageCardLms title="egyptianEducation" text="lmsDesc" img={thirdCardImg} />
      </div>
    </div>
  );
};

export default AdvantagesLms;
