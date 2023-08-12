import React, { useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Navbar = () => {
  const [value, setValue] = React.useState(0);
  const [isSticky, setIsSticky] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleTabClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar-tabs fixed ${
        isSticky && 'top-0'
      } z-50 flex w-full justify-center border-b border-t border-neo-100 bg-white-main`}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
      >
        <Tab label="Umumiy" onClick={() => handleTabClick('general')} />
        <Tab label="Imkoniyatlar" onClick={() => handleTabClick('opportunities')} />
        <Tab label="Fikrlar" onClick={() => handleTabClick('feedbacks')} />
        <Tab label="Afzalliklar" onClick={() => handleTabClick('advantages')} />
        <Tab label="Narxlar" onClick={() => handleTabClick('prices')} />
        <Tab label="Bog'lanish" onClick={() => handleTabClick('contact')} />
      </Tabs>
    </div>
  );
};

export default Navbar;
