import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import OpportunityCardErp from '../Cards/OpportunityCardErp';

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

const OpportunityErp = () => {
  return (
    <div className="mt-16 md:mt-24 lg:mt-20">
      <div className="relative mt-6 md:mt-8 lg:mt-10">
        <Carousel
          swipeable={false}
          draggable={false}
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
          <OpportunityCardErp />
          <div className="h-40 w-full bg-yellow-500">Item 2</div>
          <div className="h-40 w-full bg-pink-500">Item 3</div>
          <div className="h-40 w-full bg-blue-500">Item 4</div>
          <div className="h-40 w-full bg-violet-500">Item 5</div>
          <div className="h-40 w-full bg-green-500">Item 6</div>
        </Carousel>
      </div>
    </div>
  );
};

export default OpportunityErp;
