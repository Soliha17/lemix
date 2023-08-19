import SectionName from 'src/ui/components/atoms/SectionName';
import ansLogo from 'src/assets/images/ans-logo.png';
import novusLogo from 'src/assets/images/novus-logo.png';
import atbLogo from 'src/assets/images/atb-logo.png';
import arterumLogo from 'src/assets/images/arterum-logo.png';
import comfyLogo from 'src/assets/images/comfy-logo.png';
import leroyLogo from 'src/assets/images/leroy-logo.png';
import Carousel from 'react-multi-carousel';
import LogoCard from 'src/ui/components/Cards/LogoCard';

const usersData = [
  {
    id: 1,
    img: ansLogo,
  },
  {
    id: 2,
    img: novusLogo,
  },
  {
    id: 3,
    img: atbLogo,
  },
  {
    id: 4,
    img: arterumLogo,
  },
  {
    id: 5,
    img: comfyLogo,
  },
  {
    id: 6,
    img: leroyLogo,
  },
  {
    id: 7,
    img: atbLogo,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 5000, min: 1224 },
    items: 6,
    slidesToSlide: 2, // optional, default to 1.
    partialVisibilityGutter: 10, // this is needed to tell the amount of px that should be visible.
  },
  tablet: {
    breakpoint: { max: 1224, min: 900 },
    items: 4,
    slidesToSlide: 2, // optional, default to 1.
    partialVisibilityGutter: 10, // this is needed to tell the amount of px that should be visible.
  },
  mobile: {
    breakpoint: { max: 900, min: 700 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 0, // this is needed to tell the amount of px that should be visible.
  },
  small: {
    breakpoint: { max: 700, min: 500 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 50, // this is needed to tell the amount of px that should be visible.
  },
  extraSmall: {
    breakpoint: { max: 500, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 100, // this is needed to tell the amount of px that should be visible.
  },
};

const OurUsers = ({ bgColor }) => {
  return (
    <div className="mt-16 w-full md:mt-24 lg:mt-20">
      <SectionName name="Foydalanuvchilarimiz" />
      <div
        className={`our-users-card mt-6 rounded-2xl ${bgColor} bg-no-repeat py-10 md:mt-8 lg:mt-10`}
      >
        <Carousel
          renderButtonGroupOutside={true}
          swipeable={true}
          draggable={true}
          showDots={false}
          arrows={false}
          responsive={responsive}
          ssr={false} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .3"
          transitionDuration={300}
          containerClass="carousel-container"
          partialVisible={true}
          // removeArrowOnDeviceType={['tablet', 'mobile']}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {usersData.map((user) => (
            <LogoCard key={user.id} img={user.img} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default OurUsers;
