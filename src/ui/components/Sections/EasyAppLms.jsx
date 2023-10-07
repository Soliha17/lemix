import { useRef, useState } from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import EasyAppCardLms from '../Cards/EasyAppCardLms';
import ContactModal from '../atoms/ContactModal';

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

const EasyAppLms = () => {
  const [openContactModal, setOpenContactModal] = useState(false);

  const carouselRefLms = useRef(null);

  // Function to scroll to the next slide
  const scrollNextSlide = () => {
    if (carouselRefLms.current) {
      carouselRefLms.current.next();
    }
  };

  // Function to scroll to the previous slide
  const scrollPreviousSlide = () => {
    if (carouselRefLms.current) {
      carouselRefLms.current.previous();
    }
  };

  function onWheelFn(e) {
    const currentSlide = carouselRefLms.current.state.currentSlide;
    const screenWidth = window.innerWidth;

    console.log(e.nativeEvent.offsetY);
    if (screenWidth >= 1400) {
      if (currentSlide != 7 && e.deltaY > 0 && e.nativeEvent.offsetY > 30) {
        // Scroll down
        scrollNextSlide();

        document.body.style.overflowY = 'hidden';
      } else if (currentSlide != 2 && e.deltaY < 0 && e.nativeEvent.offsetY < 270) {
        // Scroll up
        scrollPreviousSlide();

        document.body.style.overflowY = 'hidden';
      } else if (
        (currentSlide === 2 && e.nativeEvent.offsetY < 270) ||
        (currentSlide === 7 && e.nativeEvent.offsetY > 30)
      ) {
        document.body.style.overflowY = 'scroll';

        // document.body.classList.remove('stop-scrolling');
      }
    }
  }

  return (
    <div className="carousel-wrapper-scroll mt-16 md:mt-24 lg:mt-20">
      <div className="relative mt-6 md:mt-8 lg:mt-10">
        <Carousel
          ref={carouselRefLms}
          swipeable={true}
          draggable={true}
          showDots={true}
          arrows={false}
          dotListClass="opportunity-dots easy-app-dots"
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
          // deviceType={this.props.deviceType}
          // dotListClass="custom-dot-list-style"
          // itemClass="carousel-item-padding-40-px"
        >
          <EasyAppCardLms setOpen={setOpenContactModal} />
          <EasyAppCardLms setOpen={setOpenContactModal} />
          <EasyAppCardLms setOpen={setOpenContactModal} />
          <EasyAppCardLms setOpen={setOpenContactModal} />
          <EasyAppCardLms setOpen={setOpenContactModal} />
          <EasyAppCardLms setOpen={setOpenContactModal} />
        </Carousel>
      </div>
      <ContactModal open={openContactModal} setOpen={setOpenContactModal} />
    </div>
  );
};

export default EasyAppLms;
