import { useTranslation } from 'react-i18next';

const AdvantagesCard = ({ title, text, img }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-6 rounded-2xl bg-neo-75 p-6 lg:p-12">
      {img && (
        <div>
          <img src={img} alt="img" />
        </div>
      )}
      <h3 className="text-xl font-semibold text-black-100 sm:text-3xl lg:text-4xl">{t(title)}</h3>
      <p className="text-base leading-6 text-black-75">{t(text)}</p>
    </div>
  );
};

export default AdvantagesCard;
