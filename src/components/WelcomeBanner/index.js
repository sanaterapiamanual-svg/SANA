import PropTypes from 'prop-types';
import { ButtonLink } from './Link';
import {
  BannerContainer,
  BannerLinks,
  BannerSection,
  BannerSubtitle,
  BannerTitle,
  ImgArea,
} from './styles';
import { capitalizeAll } from '../../utils/utils';
import Estrela from '../../assets/images/estrela.png';

export const WelcomeBanner = ({ title, subtitle, links = [] }) => {
  const imgDescription = 'Estrela Sana.';
  return (
    <BannerSection id="welcome-banner">
      <BannerContainer id="banner-container">
        <ImgArea src={Estrela} alt={imgDescription} />
        <BannerTitle id="banner-title">{capitalizeAll(title)}</BannerTitle>
        <BannerSubtitle id="banner-subtitle">{subtitle}</BannerSubtitle>
        <BannerLinks id="banner-links">
          {links.map((link) => (
            <ButtonLink key={link.href} {...link} />
          ))}
        </BannerLinks>
      </BannerContainer>
    </BannerSection>
  );
};

WelcomeBanner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
};
