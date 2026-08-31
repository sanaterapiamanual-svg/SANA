import PropTypes from 'prop-types';
import WhatsAppIcon from '../../assets/images/WhatsApp/GreenWhatsApp.png';
import { ButtonLink as Link, Container } from './styles';

export const WhatsAppLink = ({
  onClickHandler,
  }) => {
  return (
    <Container>
      <Link
        onClick={onClickHandler}
        href="https://wa.me/5551995492876?text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+os+servi%C3%A7os+de+massagem+e+tratamentos."
        target="_blank"
      >
      <img src={WhatsAppIcon} alt="Icone WhatsApp" />
      </Link>
    </Container>
  );
};

WhatsAppLink.propTypes = {
  onClickHandler: PropTypes.func,
};

export default WhatsAppLink;
