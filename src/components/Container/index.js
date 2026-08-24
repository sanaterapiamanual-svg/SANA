import PropTypes from 'prop-types';
import { Container } from './styles';

export const PageContainer = ({
  children,
  id,
  }) => {
  return (
    <Container id={id}>
      {children}
    </Container>
  );
};

PageContainer.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
};
