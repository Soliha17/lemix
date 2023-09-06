import { useTranslation } from 'react-i18next';

const ForWhoCard = ({ card }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-16 rounded-3xl bg-success-12 p-6 md:p-8">
      <p className="text-xl leading-6 text-black-100 md:text-2xl">
        {t('weStrengthenTheKnowledgeOfYourStudentsWithTests')}
      </p>
      <div className="relative">{card}</div>
    </div>
  );
};

export default ForWhoCard;
