import { useEffect, useRef, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import ContactModal from '../atoms/ContactModal';
import SectionName from 'src/ui/components/atoms/SectionName';
import OpportunityCardHome from 'src/ui/components/Cards/OpportunityCardHome';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const OpportunityHome = () => {
  const [openContactModal, setOpenContactModal] = useState(false);
  const carouselRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  // Function to scroll to the next slide
  const scrollNextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  // Function to scroll to the previous slide
  const scrollPreviousSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  function onWheelFn(e) {
    if (e.deltaY > 0) {
      // Scroll down
      scrollNextSlide();
    } else if (e.deltaY < 0) {
      // Scroll up
      scrollPreviousSlide();
    } else {
      console.log('else');
      // document.body.classList.remove('stop-scrolling');
    }
  }

  // document.body.style.overflow = 'hidden';

  function doSpeicalThing(nextSlide, currentSlide, onMove) {
    console.log(currentSlide);
    if (currentSlide != 2 && currentSlide != 7) {
      // document.body.classList.add('stop-scrolling');
      document.body.style.overflow = 'hidden';

      setIsSticky(true);
    } else if (currentSlide === 2) {
      document.body.style.overflow = 'scroll';
    } else {
      document.body.classList.remove('stop-scrolling');
      setIsSticky(false);
    }
  }

  return (
    <div className={`carousel-wrapper-scroll mt-16 md:mt-24 lg:mt-20`}>
      <SectionName name="featuresOfOurSystem" />
      <div
        className={`relative mt-6 md:mt-8 lg:mt-10 ${isSticky ? 'sticky top-0' : 'relative'}`}
        onWheel={onWheelFn}
      >
        <Carousel
          ref={carouselRef}
          swipeable={false}
          draggable={true}
          showDots={true}
          arrows={false}
          dotListClass="opportunity-dots"
          // customDot={<CustomDot />}
          responsive={responsive}
          renderDotsOutside={true}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          // autoPlay={this.props.deviceType !== 'mobile' ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={['tablet', 'mobile']}
          beforeChange={(nextSlide, { currentSlide, onMove }) => {
            doSpeicalThing(nextSlide, currentSlide, onMove);
          }}
          // deviceType={this.props.deviceType}
          // dotListClass="custom-dot-list-style"
          // itemClass="carousel-item-padding-40-px"
        >
          <OpportunityCardHome setOpen={setOpenContactModal} />
          <OpportunityCardHome setOpen={setOpenContactModal} />
          <OpportunityCardHome setOpen={setOpenContactModal} />
          <OpportunityCardHome setOpen={setOpenContactModal} />
          <OpportunityCardHome setOpen={setOpenContactModal} />
          <OpportunityCardHome setOpen={setOpenContactModal} />
        </Carousel>
      </div>
      <ContactModal open={openContactModal} setOpen={setOpenContactModal} />
    </div>
  );
};

export default OpportunityHome;
