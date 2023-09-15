import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useTranslation } from 'react-i18next';

import RightArrow from 'src/assets/images/right-arrow-carousel.svg';
import FeedBackCard from 'src/ui/components/Cards/FeedBackCard';
import Person from 'src/assets/images/profile-icon-dashboard.svg';
import SectionName from 'src/ui/components/atoms/SectionName';

const feedBackDatas = [
  {
    id: 1,
    img: Person,
    name: 'John Doe',
    position: 'IT Academy',
    text: 'feedbackText1',
  },
  {
    id: 2,
    img: Person,
    name: 'Jane Smith',
    position: 'Language School',
    text: 'feedbackText2',
  },
  {
    id: 3,
    img: Person,
    name: 'Bob Johnson',
    position: 'Business College',
    text: 'feedbackText3',
  },
  {
    id: 4,
    img: Person,
    name: 'Maria Rodriguez',
    position: 'Medical School',
    text: 'feedbackText4',
  },
  {
    id: 5,
    img: Person,
    name: 'William Lee',
    position: 'Art School',
    text: 'feedbackText5',
  },
  {
    id: 6,
    img: Person,
    name: 'Sarah Kim',
    position: 'Music Academy',
    text: 'feedbackText6',
  },
  {
    id: 7,
    img: Person,
    name: 'Ahmed Hassan',
    position: 'Engineering School',
    text: 'feedbackText7',
  },
  {
    id: 8,
    img: Person,
    name: 'Fatima Ali',
    position: 'Law School',
    text: 'feedbackText8',
  },
  {
    id: 9,
    img: Person,
    name: 'Carlos Hernandez',
    position: 'Culinary School',
    text: 'feedbackText9',
  },
  {
    id: 10,
    img: Person,
    name: 'Anna Ivanova',
    position: 'Dance School',
    text: 'feedbackText10',
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 9000, min: 1024 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
    partialVisibilityGutter: 100, // this is needed to tell the amount of px that should be visible.
  },
  tablet: {
    breakpoint: { max: 1024, min: 800 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
    partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
  },
  mobile: {
    breakpoint: { max: 800, min: 700 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 100, // this is needed to tell the amount of px that should be visible.
  },
  small: {
    breakpoint: { max: 700, min: 0 },
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

const FeedBacks = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-16 w-full md:mt-24 lg:mt-20">
      <SectionName name="thoughts" />
      <div className="mt-6 md:mt-8 lg:mt-10">
        <Carousel
          renderButtonGroupOutside={true}
          swipeable={true}
          draggable={true}
          showDots={false}
          arrows={false}
          customButtonGroup={<ButtonGroup bgColor="bg-primary-12" />}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          partialVisible={true}
          // removeArrowOnDeviceType={['tablet', 'mobile']}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {feedBackDatas.map((feedback) => (
            <FeedBackCard
              key={feedback.id}
              img={feedback.img}
              fullName={feedback.name}
              position={feedback.position}
              text={t(feedback.text)}
              bgColor="bg-primary-12"
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default FeedBacks;
