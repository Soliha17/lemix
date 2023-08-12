import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import SectionName from '../Atoms/SectionName';

import RightArrow from 'src/assets/images/right-arrow-carousel.svg';
import pupils from 'src/assets/images/pupils.png';
import test from 'src/assets/images/test.png';
import green from 'src/assets/images/green-bg.svg';
import blue from 'src/assets/images/blue-bg.svg';
import progressDashboard from 'src/assets/images/progress-dashboard.png';
import cardDashboard from 'src/assets/images/card-dashboard.png';

import ForWhoCard from '../Cards/ForWhoCard';

const responsive = {
  desktop: {
    breakpoint: { max: 1600, min: 1224 },
    items: 3,
    slidesToSlide: 2, // optional, default to 1.
    partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
  },
  tablet: {
    breakpoint: { max: 1224, min: 600 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
    partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
  },
  mobile: {
    breakpoint: { max: 600, min: 400 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 100, // this is needed to tell the amount of px that should be visible.
  },
  small: {
    breakpoint: { max: 500, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 0, // this is needed to tell the amount of px that should be visible.
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

const ProgressDashboardComp = () => {
  return (
    <>
      <img src={green} alt="green" />
      <img src={progressDashboard} className="absolute -right-3 -top-3" alt="progressDashboard" />
    </>
  );
};

const CardDashboardComp = () => {
  return (
    <>
      <img src={blue} alt="blue" />
      <img src={cardDashboard} className="absolute -right-3 -top-3" alt="cardDashboard" />
    </>
  );
};

const TestCard = () => {
  return (
    <>
      <img src={pupils} alt="pupils" />
      <img src={test} className="absolute -right-2 -top-8" alt="test" />
    </>
  );
};

const ForWhoExam = () => {
  return (
    <div className="mt-16 md:mt-24 lg:mt-20">
      <SectionName name="Lemix Exam Kimlar uchun" />

      <div className="relative mt-6 md:mt-8 lg:mt-10">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          arrows={false}
          partialVisible={true}
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
          itemClass="who-carousel-item-padding-40-px"
        >
          <ForWhoCard card={<TestCard />} />
          <ForWhoCard card={<ProgressDashboardComp />} />
          <ForWhoCard card={<CardDashboardComp />} />
          <ForWhoCard card={<TestCard />} />
          <ForWhoCard card={<CardDashboardComp />} />
        </Carousel>
      </div>
    </div>
  );
};

export default ForWhoExam;
