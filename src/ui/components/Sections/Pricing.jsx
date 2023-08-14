import PricingTabs from 'src/ui/components/Atoms/PricingTabs';
import SectionName from 'src/ui/components/Atoms/SectionName';

const Pricing = ({ bgColor, borderColor }) => {
  return (
    <div id="prices" className="mt-16 md:mt-16 xl:mt-24">
      <SectionName name="Tariflar" />
      <div className="mx-auto my-10 w-fit">
        <PricingTabs bgColor={bgColor} borderColor={borderColor} />
      </div>
    </div>
  );
};

export default Pricing;
