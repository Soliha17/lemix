import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import SectionName from 'src/ui/components/Atoms/SectionName';
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
  return (
    <div className="mt-16 md:mt-24 lg:mt-20">
      <SectionName name="Tizimimiz imkoniyatlari" />
      <div className="relative mt-6 md:mt-8 lg:mt-10">
        <Carousel
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
          // deviceType={this.props.deviceType}
          // dotListClass="custom-dot-list-style"
          // itemClass="carousel-item-padding-40-px"
        >
          <OpportunityCardHome />
          <OpportunityCardHome />
          <OpportunityCardHome />
          <OpportunityCardHome />
          <OpportunityCardHome />
          <OpportunityCardHome />
        </Carousel>
      </div>
    </div>
  );
};

export default OpportunityHome;
