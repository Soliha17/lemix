import { useTranslation } from 'react-i18next';

const AdvantageCardLms = ({ title, text, img }) => {
  const { t } = useTranslation();

  return (
    <div className="advantage-card__lms mt-6 flex flex-col items-center gap-6 rounded-3xl bg-primary-12 p-6 md:mt-10 md:flex-row md:p-8 xl:p-14">
      <div className="">
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl lg:mb-6 lg:text-4xl">{t(title)}</h2>
        <p className="w-full text-sm lg:w-10/12 lg:text-base">{t(text)}</p>
      </div>
      <img src={img} className="w-full md:w-1/2" alt="just card img" />
    </div>
  );
};

export default AdvantageCardLms;
