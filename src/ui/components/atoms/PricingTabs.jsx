import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';

export default function PricingTabs({ bgColor }) {
  const selectedTabStyle = bgColor === 'bg-success-100' ? '#40DD6C' : '#40AAFF';

  return (
    <Tabs
      aria-label="tabs"
      className="pricing-tabs"
      defaultValue={0}
      sx={{ bgcolor: '#F9F9FB', borderRadius: '24px' }}
    >
      <TabList
        disableUnderline
        sx={{
          p: 0.5,
          gap: 0.5,
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
        <Tab disableIndicator>3 oylik</Tab>
        <Tab disableIndicator>6 oylik</Tab>
        <Tab disableIndicator>12 oylik</Tab>
      </TabList>
    </Tabs>
  );
}
