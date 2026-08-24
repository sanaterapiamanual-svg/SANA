import PropTypes from 'prop-types';
import { SubtitlePiece } from './styles';

export const Subtitle = ({
  id,
  text,
  marginBottom,
  }) => {
  return (
    <SubtitlePiece id={id} marginBottom={marginBottom}>
      {text}
    </SubtitlePiece>
  );
};

Subtitle.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string.isRequired,
  marginBottom: PropTypes.string,
};
