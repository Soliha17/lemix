import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const SectionName = ({ name }) => {
  const { t } = useTranslation();

  return (
    <h2 className="text-center text-3xl font-semibold text-black-100 lg:text-5xl">{t(name)}</h2>
  );
};

export default SectionName;

SectionName.propTypes = {
  name: PropTypes.string.isRequired,
};
