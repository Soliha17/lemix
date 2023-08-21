import { useState, useEffect, useCallback, useMemo } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Navbar = () => {
  const [value, setValue] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  const handleTabClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };


  // try

  const sections = useMemo(
    () => ['general', 'opportunities', 'advantages', 'feedbacks', 'prices', 'contact'],
    [],
  );

  const handleScroll = useCallback(() => {
    for (let i = 0; i < sections.length; i++) {
      const section = document.getElementById(sections[i]);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.bottom <= window.innerHeight / 0.9) {
          setValue(i);
        }
      }
    }

    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }, [sections]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    handleTabClick(sections[newValue]);
  };

  return (
    <div
      className={`navbar-tabs fixed ${
        isSticky && 'top-0'
      } z-40 flex w-full justify-center border-b border-t border-neo-100 bg-white-main`}
    >
      <Tabs
        key={value}
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
      >
        <Tab label="Umumiy" />
        <Tab label="Imkoniyatlar" />
        <Tab label="Afzalliklar" />
        <Tab label="Fikrlar" />
        <Tab label="Narxlar" />
        <Tab label="Bog'lanish" />
      </Tabs>
    </div>
  );
};

export default Navbar;
