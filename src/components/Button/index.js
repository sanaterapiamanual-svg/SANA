import PropTypes from 'prop-types';
import { Button as Btn } from './styles';

export const Button = ({
  href,
  id,
  marginBottom,
  padding,
  text,
  }) => {
  return (
    <Btn
      href={href ? href : 'https://wa.me/5551995492876'}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noreferrer' : undefined}
      id={id}
      marginBottom={marginBottom}
      padding={padding}
    >
      {text}
    </Btn>
  );
};

Button.propTypes = {
  href: PropTypes.string,
  id: PropTypes.string,
  marginBottom: PropTypes.string,
  padding: PropTypes.string,
  text: PropTypes.string.isRequired,
};
