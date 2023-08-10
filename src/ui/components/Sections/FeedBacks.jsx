import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import RightArrow from 'src/assets/images/right-arrow-carousel.svg';
import FeedBackCard from 'src/ui/components/Cards/FeedBackCard';
import Person from 'src/assets/images/xalilbek.png';
import SectionName from 'src/ui/components/Atoms/SectionName';

const feedBackDatas = [
  {
    id: 1,
    img: Person,
    name: 'Halilbek Safarov',
    position: 'Toko LC rahbari',
    text: `
      Bu juda ajoyib mahsulot bo'lib, juda ko'p yordam beradi, ayniqsa yirik loyihalarda!
      Men Lemix, jarayonlarni raqamlashtirmasdan qanday qilib samarali bo'lishi uchun o'quv tizimini yaratishni tushunmayapman.
    `,
  },
  {
    id: 2,
    img: Person,
    name: 'Odilbek Zokirov',
    position: 'Manama prizidenti',
    text: `
      Bu juda ajoyib mahsulot bo'lib, juda ko'p yordam beradi, ayniqsa yirik loyihalarda!
      Men Lemix, jarayonlarni raqamlashtirmasdan qanday qilib samarali bo'lishi uchun o'quv tizimini yaratishni tushunmayapman.
    `,
  },
  {
    id: 3,
    img: Person,
    name: 'Someone Alibekov',
    position: 'Senior developer in Google',
    text: `
      Bu juda ajoyib mahsulot bo'lib, juda ko'p yordam beradi, ayniqsa yirik loyihalarda!
      Men Lemix, jarayonlarni raqamlashtirmasdan qanday qilib samarali bo'lishi uchun o'quv tizimini yaratishni tushunmayapman.
    `,
  },
  {
    id: 4,
    img: Person,
    name: 'Rahmbek Jamilova',
    position: 'Epamer',
    text: `
      Bu juda ajoyib mahsulot bo'lib, juda ko'p yordam beradi, ayniqsa yirik loyihalarda!
      Men Lemix, jarayonlarni raqamlashtirmasdan qanday qilib samarali bo'lishi uchun o'quv tizimini yaratishni tushunmayapman.
    `,
  },
  {
    id: 5,
    img: Person,
    name: 'Fotima Qahhorova',
    position: 'Epamer',
    text: `
      Bu juda ajoyib mahsulot bo'lib, juda ko'p yordam beradi, ayniqsa yirik loyihalarda!
      Men Lemix, jarayonlarni raqamlashtirmasdan qanday qilib samarali bo'lishi uchun o'quv tizimini yaratishni tushunmayapman.
    `,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 1600, min: 1024 },
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
  return (
    <div className="mt-16 w-full md:mt-24 lg:mt-20">
      <SectionName name="Fikrlar" />
      <div className="mt-6 md:mt-8 lg:mt-10">
        <Carousel
          renderButtonGroupOutside={true}
          swipeable={true}
          draggable={true}
          showDots={false}
          arrows={false}
          customButtonGroup={<ButtonGroup bgColor="bg-primary-12" />}
          responsive={responsive}
          ssr={false} // means to render carousel on server-side.
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
              text={feedback.text}
              bgColor="bg-primary-12"
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default FeedBacks;
