import { useTranslation } from 'react-i18next';

import rightArrow from 'src/assets/images/right-black-arrow.svg';

const WhiteButton = ({ text, setOpen }) => {
  const { t } = useTranslation();

  return (
    <button
      onClick={() => setOpen(true)}
      className="flex gap-4 rounded-2xl bg-white-main px-9 py-4 font-semibold text-black-100 hover:bg-neo-100"
    >
      {t(text)}{' '}
      <img
        src="https://cdn.jsdelivr.net/gh/Soliha17/lemix/src/assets/images/right-blue-arrow.svg"
        width={24}
        height={24}
        alt="right arrow"
        loading="lazy"
      />
    </button>
  );
};

export default WhiteButton;
