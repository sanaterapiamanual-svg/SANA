import {
  Container,
  LogoIcon,
  LogoText,
  NavigationLink,
} from './styles';
import Logo from '../../../assets/images/dark-logo-2.png';
import PropTypes from 'prop-types';

export const LogoArea = ({ compact = false }) => {
  return (
    <Container id="container-logo" compact={compact}>
      <NavigationLink href="/" compact={compact}>
        <LogoIcon src={Logo} compact={compact} alt="Logo Sana" />
        {!compact && <LogoText>TERAPIA MANUAL</LogoText>}
      </NavigationLink>
    </Container>
  );
};

LogoArea.propTypes = {
  compact: PropTypes.bool,
};
