import PropTypes from 'prop-types';
import { TitlePiece } from './styles';

export const Title = ({
  id,
  text,
  marginBottom,
  }) => {
  return (
    <TitlePiece id={id} marginBottom={marginBottom}>
      {text}
    </TitlePiece>
  );
};

Title.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string.isRequired,
  marginBottom: PropTypes.string,
};
