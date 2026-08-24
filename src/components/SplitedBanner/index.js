import PropTypes from 'prop-types';
import { ButtonLink } from './Link';
import { Title } from '../Title';
import {
  ContentPanel,
  ContentWrapper,
  Description,
  ImagePanel,
  LinksRow,
} from './styles';

export const SplitedBanner = ({
  imgDescription,
  text,
  paragraph1,
  paragraph2,
  paragraph3,
  links = [],
  }) => {
  return (
    <>
      <ImagePanel aria-label={imgDescription} />
      <ContentPanel id="content-panel">
        <ContentWrapper id="content-wrapper">
          <Title text={text} />

          <Description>{paragraph1}</Description>
          <Description>{paragraph2}</Description>
          <Description>{paragraph3}</Description>

          <LinksRow>
            {links.map((link) => (
              <ButtonLink key={link.href} {...link} />
            ))}
          </LinksRow>
        </ContentWrapper>
      </ContentPanel>
    </>
  );
};

SplitedBanner.propTypes = {
  imgDescription: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  paragraph1: PropTypes.string.isRequired,
  paragraph2: PropTypes.string.isRequired,
  paragraph3: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
};
