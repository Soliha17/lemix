import PropTypes from 'prop-types';

const StatisticCard = ({ count, text, textColor, bgColor }) => {
  return (
    <div
      className={`${bgColor} flex flex-col gap-8 rounded-2xl bg-no-repeat p-5`}
      style={{
        backgroundImage: 'url("src/assets/images/line__statistic-card.svg")',
        backgroundPosition: 'top right',
      }}
    >
      <h2 className={`text-3xl font-medium ${textColor} lg:text-5xl`}>{count}</h2>
      <p className="p1 text-black-100">{text}</p>
    </div>
  );
};

export default StatisticCard;

StatisticCard.propTypes = {
  count: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};
