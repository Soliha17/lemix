import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import SectionName from '../Atoms/SectionName';

import RightArrow from 'src/assets/images/right-arrow-carousel.svg';
import OpportunityCardExam from '../Cards/OpportunityCardExam';

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

const ButtonGroup = ({ goToSlide, bgColor, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className="mt-4 flex justify-end gap-3 sm:mt-6 md:mt-8">
      <button
        onClick={() => goToSlide(currentSlide - 1)}
        className={`${bgColor} flex h-10 w-10 items-center justify-center rounded-3xl`}
      >
        <img src={RightArrow} className="rotate-180" alt="right arrow" />
      </button>
      <button
        onClick={() => goToSlide(currentSlide + 1)}
        className={`${bgColor} flex h-10 w-10 items-center justify-center rounded-3xl`}
      >
        <img src={RightArrow} alt="right arrow" />
      </button>
    </div>
  );
};

const OpportunityExam = () => {
  return (
    <div id="opportunities" className="mt-16 md:mt-24 lg:mt-20">
      <SectionName name="Imkoniyatlar" />

      <div className="relative mt-6 md:mt-8 lg:mt-10">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          arrows={false}
          // customDot={<CustomDot />}
          responsive={responsive}
          renderButtonGroupOutside={true}
          renderDotsOutside={true}
          customButtonGroup={<ButtonGroup bgColor="bg-success-12" />}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          // autoPlay={this.props.deviceType !== 'mobile' ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="opp-lms-container"
          removeArrowOnDeviceType={['tablet', 'mobile']}
          // deviceType={this.props.deviceType}
          dotListClass="opp-lms-dots opp-exam-dots"
          itemClass="carousel-item-padding-40-px"
        >
          <OpportunityCardExam />
          <OpportunityCardExam />
          <OpportunityCardExam />
          <OpportunityCardExam />
          <OpportunityCardExam />
        </Carousel>
      </div>
    </div>
  );
};

export default OpportunityExam;
