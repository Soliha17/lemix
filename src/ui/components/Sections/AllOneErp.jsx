import { useTranslation } from 'react-i18next';

import SectionName from 'src/ui/components/atoms/SectionName';
import AllOneCard from 'src/ui/components/Cards/AllOneCard';

const allOneErp = [
  {
    id: 1,
    title: 'sale',
    text: 'lmsDescSmall',
  },
  {
    id: 2,
    title: 'marketing',
    text: 'lmsDescSmall',
  },
  {
    id: 3,
    title: 'hr',
    text: 'lmsDescSmall',
  },
  {
    id: 4,
    title: 'lms',
    text: 'lmsDescSmall',
  },
  {
    id: 5,
    title: 'testing',
    text: 'lmsDescSmall',
  },
  {
    id: 6,
    title: 'education',
    text: 'lmsDescSmall',
  },
];

const AllOneErp = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-16 md:mt-24 lg:mt-20">
      <SectionName name="Lemix ERP barchasi bittada" />
      <div className="mt-16 md:mt-24 lg:mt-20">
        <div className="all-in-one-container flex flex-wrap justify-center gap-6">
          {allOneErp.map((card) => (
            <AllOneCard key={card.id} id={card.id} title={t(card.title)} text={t(card.text)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllOneErp;
