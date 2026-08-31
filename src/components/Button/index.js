import PropTypes from 'prop-types';
import { Button as Btn } from './styles';

export const Button = ({
  href,
  id,
  marginBottom,
  padding,
  target,
  text,
  }) => {
  return (
    <Btn
      href={href ? href : 'https://wa.me/5551995492876?text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+os+servi%C3%A7os+de+massagem+e+tratamentos.'}
      target={target ? target : '_blank'}
      rel={href?.startsWith('https') ? 'noreferrer' : undefined}
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
  target: PropTypes.string,
  text: PropTypes.string.isRequired,
};
