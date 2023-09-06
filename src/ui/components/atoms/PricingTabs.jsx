import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';

import { useTranslation } from 'react-i18next';

import PricingFilledCard from '../Cards/PricingFilledCard';
import PricingOutlinedCard from '../Cards/PricingOutlinedCard';

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

export default function PricingTabs({ bgColor, borderColor }) {
  const selectedTabStyle = bgColor === 'bg-success-100' ? '#40DD6C' : '#40AAFF';

  const { t } = useTranslation();

  return (
    <Tabs
      aria-label="tabs"
      className="pricing-tabs"
      defaultValue={0}
      sx={{ bgcolor: 'transparent', borderRadius: '24px' }}
    >
      <TabList
        className="tablist__pricing"
        disableUnderline
        sx={{
          p: 0.5,
          gap: 0.5,
          margin: '0 auto',
          maxWidth: '515px',
          justifyContent: 'center',
          borderRadius: '24px',
          bgcolor: '#F9F9FB',
          color: '#8D8C8B',
          [`& .${tabClasses.root}[aria-selected="true"]`]: {
            boxShadow: 'sm',
            bgcolor: selectedTabStyle,
            color: '#ffffff',
          },
        }}
      >
        <Tab disableIndicator>3 {t('monthly')}</Tab>
        <Tab disableIndicator>6 {t('monthly')}</Tab>
        <Tab disableIndicator>12 {t('monthly')}</Tab>
      </TabList>
      <TabPanel value={0}>
        <div className="mt-6 flex flex-col gap-6 md:mt-10 md:flex-row">
          <div className="mt-0 md:mt-12">
            <PricingOutlinedCard
              plan="basic"
              bgColor={bgColor}
              borderColor={borderColor}
              price="199 000"
              data={basicDatas}
            />
          </div>
          <PricingFilledCard
            plan="popular"
            borderColor={borderColor}
            bgColor={bgColor}
            price="399 000"
            data={generalDatas}
          />
          <div className="mt-0 md:mt-12">
            <PricingOutlinedCard
              plan="business"
              borderColor={borderColor}
              bgColor={bgColor}
              price="599 000"
              data={biznesDatas}
            />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={1}>
        <div className="mt-6 flex flex-col gap-6 md:mt-10 md:flex-row">
          <div className="mt-0 md:mt-12">
            <PricingOutlinedCard
              plan="basic"
              bgColor={bgColor}
              borderColor={borderColor}
              price="999 000"
              data={basicDatas}
            />
          </div>
          <PricingFilledCard
            plan="popular"
            borderColor={borderColor}
            bgColor={bgColor}
            price="1399 000"
            data={generalDatas}
          />
          <div className="mt-0 md:mt-12">
            <PricingOutlinedCard
              plan="business"
              borderColor={borderColor}
              bgColor={bgColor}
              price="1599 000"
              data={biznesDatas}
            />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={2}>
        <div className="mt-6 flex flex-col gap-6 md:mt-10 md:flex-row">
          <div className="mt-0 md:mt-12">
            <PricingOutlinedCard
              plan="basic"
              bgColor={bgColor}
              borderColor={borderColor}
              price="1199 000"
              data={basicDatas}
            />
          </div>
          <PricingFilledCard
            plan="popular"
            borderColor={borderColor}
            bgColor={bgColor}
            price="1499 000"
            data={generalDatas}
          />
          <div className="mt-0 md:mt-12">
            <PricingOutlinedCard
              plan="business"
              borderColor={borderColor}
              bgColor={bgColor}
              price="1699 000"
              data={biznesDatas}
            />
          </div>
        </div>
      </TabPanel>
    </Tabs>
  );
}
