import PropTypes from 'prop-types';
import {
  Address,
  ContentPanel,
  ContentWrapper,
  Description,
  ImageArea,
  ImagePanel,
  LinksRow,
} from './styles';
import { Button } from '../Button';
import { capitalizeAll } from '../../utils/utils';
import { Map } from '../Map';
import { Title } from '../Title';
import { Subtitle } from '../Subtitle';

export const PageSplitAtendimento = ({
  imgDescription,
  imgSrc,
  links = [],
  paragraph1,
  paragraph2,
  paragraph3,
  subtitle,
  title,
  }) => {
  return (
    <>
      <ImagePanel aria-label={imgDescription}>
        <ImageArea src={imgSrc} alt={imgDescription} />
      </ImagePanel>
      <ContentPanel id="content-panel">
        <ContentWrapper id="content-wrapper">
          <Map />
          <Title text={capitalizeAll(title)} marginBottom="0" />
          <Subtitle text={capitalizeAll(subtitle)}/>
          <Description>{paragraph1}</Description>
          <Description>{paragraph2}</Description>
          <Address>{paragraph3}</Address>

          <LinksRow>
            {links.map((link) => (
              <Button key={link.text} {...link}/>
            ))}
          </LinksRow>
        </ContentWrapper>
      </ContentPanel>
    </>
  );
};

PageSplitAtendimento.propTypes = {
  imgDescription: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
  paragraph1: PropTypes.string.isRequired,
  paragraph2: PropTypes.string.isRequired,
  paragraph3: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
