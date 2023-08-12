import PricingTabs from 'src/ui/components/Atoms/PricingTabs';
import SectionName from 'src/ui/components/Atoms/SectionName';
import PricingFilledCard from 'src/ui/components/Cards/PricingFilledCard';
import PricingOutlinedCard from 'src/ui/components/Cards/PricingOutlinedCard';

const basicDatas = [
  {
    id: 1,
    plus: ' LMS (Learning Management System)',
  },
  {
    id: 2,
    plus: ' LMS (Learning Management System)',
  },
  {
    id: 3,
    plus: ' LMS (Learning Management System)',
  },
  {
    id: 4,
    plus: ' LMS (Learning Management System)',
  },
  {
    id: 5,
    plus: ' LMS (Learning Management System)',
  },
  {
    id: 6,
    minus: ' LMS (Learning Management System)',
  },
  {
    id: 7,
    minus: ' LMS (Learning Management System)',
  },
  {
    id: 8,
    minus: ' LMS (Learning Management System)',
  },
];

const generalDatas = [
  {
    id: 1,
    plus: ' LMS (Learning Management System)',
  },
  {
    id: 2,
    plus: ' LMS (Learning Management System)',
  },
  {
    id: 3,
    plus: ' LMS (Learning Management System)',
  },
  {
    id: 4,
    plus: ' LMS (Learning Management System)',
  },
  {
    id: 5,
    plus: ' LMS (Learning Management System)',
  },
  {
    id: 6,
    minus: ' LMS (Learning Management System)',
  },
  {
    id: 7,
    minus: ' LMS (Learning Management System)',
  },
  {
    id: 8,
    minus: ' LMS (Learning Management System)',
  },
  {
    id: 9,
    minus: ' LMS (Learning Management System)',
  },
];

const biznesDatas = [
  {
    id: 1,
    plus: ' LMS (Learning Management System)',
  },
  {
    id: 2,
    plus: ' LMS (Learning Management System)',
  },
  {
    id: 3,
    plus: ' LMS (Learning Management System)',
  },
  {
    id: 4,
    plus: ' LMS (Learning Management System)',
  },
  {
    id: 5,
    plus: ' LMS (Learning Management System)',
  },
  {
    id: 6,
    plus: ' LMS (Learning Management System)',
  },
  {
    id: 7,
    plus: ' LMS (Learning Management System)',
  },
  {
    id: 8,
    plus: ' LMS (Learning Management System)',
  },
];

const Pricing = ({ bgColor, borderColor }) => {
  return (
    <div className="mt-16 md:mt-16 xl:mt-24">
      <SectionName name="Tariflar" />
      <div className="mx-auto my-10 w-fit">
        <PricingTabs bgColor={bgColor} />
      </div>
      <div className="mt-6 flex flex-col gap-6 md:mt-10 md:flex-row">
        <div className="mt-0 md:mt-12">
          <PricingOutlinedCard
            plan="Oddiy"
            bgColor={bgColor}
            borderColor={borderColor}
            price="199 000"
            data={basicDatas}
          />
        </div>
        <PricingFilledCard
          plan="Ommabop"
          borderColor={borderColor}
          bgColor={bgColor}
          price="399 000"
          data={generalDatas}
        />
        <div className="mt-0 md:mt-12">
          <PricingOutlinedCard
            plan="Biznes"
            borderColor={borderColor}
            bgColor={bgColor}
            price="599 000"
            data={biznesDatas}
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
