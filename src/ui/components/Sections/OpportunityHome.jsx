import { useRef, useState } from 'react';
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
    const currentSlide = carouselRef.current.state.currentSlide;
    const screenWidth = window.innerWidth;

    // console.log(e);
    // console.log(e.nativeEvent.offsetY);
    if (screenWidth >= 1400) {
      if (currentSlide != 7 && e.deltaY > 0 && e.nativeEvent.offsetY > 46) {
        // Scroll down
        scrollNextSlide();

        document.body.style.overflowY = 'hidden';
      } else if (currentSlide != 2 && e.deltaY < 0 && e.nativeEvent.offsetY < 270) {
        // Scroll up
        scrollPreviousSlide();

        document.body.style.overflowY = 'hidden';
      } else if (
        (currentSlide === 2 && e.nativeEvent.offsetY < 270) ||
        (currentSlide === 7 && e.nativeEvent.offsetY > 46)
      ) {
        document.body.style.overflowY = 'scroll';

        // document.body.classList.remove('stop-scrolling');
      }
    }
  }

  return (
    <div className={`carousel-wrapper-scroll relative mt-16 md:mt-24 lg:mt-20`}>
      <SectionName name="featuresOfOurSystem" />
      <div className={`mt-6 md:mt-8 lg:mt-10`}>
        <Carousel
          ref={carouselRef}
          swipeable={true}
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
          <OpportunityCardHome
            setOpen={setOpenContactModal}
            title="theMainCapabilitiesOfTheTrainingDepartment"
            list1="onlineAndHybridEducation"
            list2="workWithGroupsAndIndividualStudents"
            list3="smartAttendanceSystem"
            list4="assigningAndCheckingHomework"
            list5="conductingTestsExams"
            list6="onlineInteractiveLibrary"
          />
          <OpportunityCardHome
            setOpen={setOpenContactModal}
            title="theMainCapabilitiesOfTheSalesDepartment"
            list1="maintainingADatabaseOfLeadsAndCustomers"
            list2="interactiveForms"
            list3="formingASalesFunnel"
            list4="workWithDemoStudents"
          />
          <OpportunityCardHome
            setOpen={setOpenContactModal}
            title="theMainCapabilitiesOfTheFinanceDepartment"
            list1="monitoringOfFinancialTransactions"
            list2="manageAccountsWithStudentsUsingAnOnlineWallet"
            list3="automationOfFinancialReportingOfBranchesCoursesAndGroups"
            list4="integrationWithLocalAndInternationalPaymentSystems"
            list5="smartBillingOption"
          />
          <OpportunityCardHome
            setOpen={setOpenContactModal}
            title="theMainCapabilitiesOfTheMarketingDepartment"
            list1="sendingSMSMessages"
            list2="analysisOfMarketingChannels"
            list3="workingOnTheBasisOfSegments"
            list4="automationOfReports"
          />
          <OpportunityCardHome
            setOpen={setOpenContactModal}
            title="keyFeaturesOfTheMobileApplication"
            list1="learningOnlineLessons"
            list2="homeworkAndChecking"
            list3="resultsAndRanking"
            list4="library"
            list5="payments"
            list6="exams"
            list7="news"
            list8="news"
            desc="inTheStudentPortalStudentsCanUseNotOnlyAWebBrowserButAlsoAMobileApplicationTheAppHasTheFollowingFeatures"
          />
        </Carousel>
      </div>
      <ContactModal open={openContactModal} setOpen={setOpenContactModal} />
    </div>
  );
};

export default OpportunityHome;
