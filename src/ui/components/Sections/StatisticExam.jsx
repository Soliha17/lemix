import { Grid } from '@mui/material';

import StatisticCard from 'src/ui/components/Cards/StatisticCard';
import SectionName from 'src/ui/components/Atoms/SectionName';

const statisticDatas = [
  {
    id: 1,
    count: '456 000+',
    text: 'Foydalanuvchilarimiz qamrovi',
  },
  {
    id: 2,
    count: '56+',
    text: 'Hududlar',
  },
  {
    id: 3,
    count: '556+',
    text: 'Kompaniyalar',
  },
  {
    id: 4,
    count: '717+',
    text: 'Kompaniyalar',
  },
];

const StatisticsExam = () => {
  return (
    <div className="mt-16 md:mt-24 lg:mt-20">
      <SectionName name="Statistikamiz" />
      <Grid container rowSpacing={3} mt={2} columnSpacing={{ xs: 2, sm: 3, md: 3 }}>
        {statisticDatas.map((statistic) => (
          <Grid item key={statistic.id} xs={12} sm={6} lg={3}>
            <StatisticCard
              count={statistic.count}
              text={statistic.text}
              textColor="text-success-100"
              bgColor="bg-success-12"
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default StatisticsExam;
