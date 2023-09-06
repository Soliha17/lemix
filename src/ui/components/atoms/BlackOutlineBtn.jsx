import { useTranslation } from 'react-i18next';

const BlackOutlineBtn = ({ text, setOpen }) => {
  const { t } = useTranslation();

  return (
    <button
      onClick={() => setOpen(true)}
      className="rounded-2xl border border-black-100 px-9 py-4 font-semibold text-black-100 hover:bg-black-100 hover:text-white-main"
    >
      {t(text)}
    </button>
  );
};

export default BlackOutlineBtn;
// trying to fix deploy error
