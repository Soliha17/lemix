import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

import StatisticCard from 'src/ui/components/Cards/StatisticCard';
import SectionName from 'src/ui/components/atoms/SectionName';

const statisticDatas = [
  {
    id: 1,
    count: '1500+',
    text: 'users',
  },
  {
    id: 2,
    count: '14+',
    text: 'launchedRegions',
  },
  {
    id: 3,
    count: '80+',
    text: 'systemOptions',
  },
  {
    id: 4,
    count: '120+',
    text: 'customers',
  },
];

const Statistics = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-16 md:mt-24 lg:mt-20">
      <SectionName name="ourStatistics" />
      <Grid container rowSpacing={3} mt={2} columnSpacing={{ xs: 2, sm: 3, md: 3 }}>
        {statisticDatas.map((statistic) => (
          <Grid item key={statistic.id} xs={12} sm={6} lg={3}>
            <StatisticCard
              count={statistic.count}
              text={t(statistic.text)}
              textColor="text-primary-100"
              bgColor="bg-primary-12"
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Statistics;
