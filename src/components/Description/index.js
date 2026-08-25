import PropTypes from 'prop-types';
import { Description } from './styles';

export const DescriptionText = ({
  id,
  text,
  marginBottom,
  }) => {
  return (
    <Description id={id} marginBottom={marginBottom}>
      {text}
    </Description>
  );
};

DescriptionText.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string.isRequired,
  marginBottom: PropTypes.string,
};
