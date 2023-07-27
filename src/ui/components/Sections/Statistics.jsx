import { Grid } from '@mui/material';
import StatisticCard from '../StatisticCard/StatisticCard';
import SectionName from './SectionName';

const Statistics = () => {
  return (
    <div className="mt-16 md:mt-24 lg:mt-20">
      <SectionName name="Statistikamiz" />
      <Grid container rowSpacing={3} mt={4} columnSpacing={{ xs: 2, sm: 3, md: 3 }}>
        <Grid item xs={12} sm={6} lg={3}>
          <StatisticCard />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <StatisticCard />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <StatisticCard />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <StatisticCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default Statistics;
