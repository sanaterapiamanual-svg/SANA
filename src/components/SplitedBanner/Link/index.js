import PropTypes from 'prop-types';
import { BtnContainer, ButtonLink as Link, ImgArea } from './styles';
import Estrela from '../../../assets/images/brilhar.png';

export const ButtonLink = ({
  href,
  imgDescription,
  onClickHandler,
  title,
  width,
  }) => {
  return (
    <BtnContainer>
      <Link
        onClick={onClickHandler}
        href={href}
        width={width}
      >
        {title}
        <ImgArea src={Estrela} alt={imgDescription} />
      </Link>
    </BtnContainer>
  );
};

ButtonLink.propTypes = {
  active: PropTypes.bool,
  href: PropTypes.string.isRequired,
  img: PropTypes.string,
  imgDescription: PropTypes.string,
  onClickHandler: PropTypes.func,
  title: PropTypes.string.isRequired,
  width: PropTypes.string,
};
