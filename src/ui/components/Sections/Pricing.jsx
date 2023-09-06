import PricingTabs from 'src/ui/components/atoms/PricingTabs';
import SectionName from 'src/ui/components/atoms/SectionName';

const Pricing = ({ bgColor, borderColor }) => {
  return (
    <div id="prices" className="mt-16 md:mt-16 xl:mt-24">
      <SectionName name="tariffs" />
      <div className="mx-auto my-10 w-fit">
        <PricingTabs bgColor={bgColor} borderColor={borderColor} />
      </div>
    </div>
  );
};

export default Pricing;
