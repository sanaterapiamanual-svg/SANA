import PropTypes from 'prop-types';
import { ButtonContainer, ButtonLink as Link } from './styles';

export const ButtonLink = ({
  active = false,
  href,
  img,
  imgDescription,
  onClickHandler,
  title,
  width,
  }) => {
  return (
    <ButtonContainer>
      <img src={img} alt={imgDescription} />
      <Link
        onClick={onClickHandler}
        href={href}
        className={`nav-link-${active ? 'active' : ''}`}
        width={width}
      >
        {title}
      </Link>
    </ButtonContainer>
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
