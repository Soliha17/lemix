import CustomizedAccordions from 'src/ui/components/Moleculas/PriceAccordion';
import SectionName from 'src/ui/components/Atoms/SectionName';

const PriceComparison = () => {
  return (
    <div className="mt-16 md:mt-24 lg:mt-20">
      <div className="mb-8 flex flex-col items-center gap-8 xl:flex-row xl:justify-between xl:gap-0">
        <SectionName name="Tariflarni solishtirish" />
        <div className="flex flex-col gap-6 sm:flex-row">
          <span>
            <p className="text-center text-3xl text-black-100">Oddiy</p>
            <p className="text-base text-black-0">
              <b>199 000</b> so&apos;m/oyiga
            </p>
          </span>
          <span>
            <p className="text-center text-3xl text-black-100">Ommabop</p>
            <p className="text-base text-black-0">
              <b>399 000</b> so&apos;m/oyiga
            </p>
          </span>
          <span>
            <p className="text-center text-3xl text-black-100">Biznes</p>
            <p className="text-base text-black-0">
              <b>599 000</b> so&apos;m/oyiga
            </p>
          </span>
        </div>
      </div>
      <CustomizedAccordions />
    </div>
  );
};

export default PriceComparison;
