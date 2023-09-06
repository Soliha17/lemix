import SectionName from 'src/ui/components/atoms/SectionName';
import AdvantagesCard from 'src/ui/components/Cards/AdvantagesCard';

import dashboard from 'src/assets/images/advantages-dashboard.png';
import table from 'src/assets/images/table-advantages.png';

const AdvantagesErp = () => {
  return (
    <div id="advantages" className="mt-16 md:mt-24 lg:mt-20">
      <SectionName name="ourAdvantages" />

      <div className="mt-6 flex flex-col gap-8 sm:flex-row md:mt-10">
        <div className="flex flex-col gap-8">
          <AdvantagesCard title="interactiveInterface" text="lmsDesc" img={table} />
          <AdvantagesCard title="abilityToSolveProblemsQuickly" text="lmsDesc" />
        </div>
        <div className="flex flex-col-reverse gap-8 sm:flex-col">
          <AdvantagesCard title="abilityToSolveProblemsQuickly" text="lmsDesc" />
          <AdvantagesCard title="permanentStatistics" text="lmsDesc" img={dashboard} />
        </div>
      </div>
    </div>
  );
};

export default AdvantagesErp;
