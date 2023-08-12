import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Navbar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="navbar-tabs flex w-full justify-center border-b border-t border-neo-100">
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
      >
        <Tab label="Umumiy" />
        <Tab label="Imkoniyatlar" />
        <Tab label="Fikrlar" />
        <Tab label="Afzalliklar" />
        <Tab label="Narxlar" />
        <Tab label="Bog'lanish" />
      </Tabs>
    </div>
  );
};

export default Navbar;
