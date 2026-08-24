import PropTypes from 'prop-types';
import { GridArea } from './styles';

const GridContainer = ({ children }) => (
  <GridArea id="grid-container">
    {children}
  </GridArea>
);

GridContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GridContainer;
