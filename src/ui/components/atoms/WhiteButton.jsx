import rightArrow from 'src/assets/images/right-black-arrow.svg';

const WhiteButton = ({ text }) => {
  return (
    <button className="flex gap-4 rounded-2xl bg-white-main px-9 py-4 font-semibold text-black-100 hover:bg-neo-100">
      {text} <img src={rightArrow} alt="right arrow" />
    </button>
  );
};

export default WhiteButton;
