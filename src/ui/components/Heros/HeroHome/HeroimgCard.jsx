import PropTypes from 'prop-types';

const HeroimgCard = ({ classname, title, img }) => {
  return (
    <div
      className={`${classname} flex w-64 justify-center gap-4 rounded-2xl bg-white-main bg-opacity-30 p-4 backdrop-blur`}
    >
      <h6 className="font-medium text-white-main">{title}</h6>
      <img src={img} className="img__hero-img-card" alt={img} />
    </div>
  );
};

export default HeroimgCard;

HeroimgCard.propTypes = {
  classname: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
