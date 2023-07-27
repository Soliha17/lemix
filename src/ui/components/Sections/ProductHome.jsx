import { useState } from 'react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import PropTypes from 'prop-types';

import SectionName from './SectionName';
import ProductCard from '../Cards/ProductCard/ProductCard';

const ProductHome = () => {
  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <div className="mt-6 md:mt-8 lg:mt-11">{children}</div>}
      </div>
    );
  }

  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="product-section mt-16 md:mt-24 lg:mt-20">
      <SectionName name="Bizning mahsulotlar" />
      <div className="mt-8 flex justify-center">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
        >
          <Tab label="Lemix ERP" {...a11yProps(0)} />
          <Tab label="Lemix LMS" {...a11yProps(1)} />
          <Tab label="Lemix Exam" {...a11yProps(2)} />
          <Tab label="Lemix Coaching" {...a11yProps(3)} />
          <Tab label="Lemix Market" {...a11yProps(4)} />
        </Tabs>
      </div>
      <CustomTabPanel value={value} index={0}>
        <ProductCard />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        Item Three
      </CustomTabPanel>
    </div>
  );
};

export default ProductHome;
