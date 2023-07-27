import PropTypes from 'prop-types';

const SectionName = ({ name }) => {
  return <h2 className="text-center text-3xl font-semibold text-black-100 lg:text-5xl">{name}</h2>;
};

export default SectionName;

SectionName.propTypes = {
  name: PropTypes.string.isRequired,
};
