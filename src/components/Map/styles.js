import styled from 'styled-components';
import * as mixins from '../../styles/mixins';

export const MapFrame = styled.iframe`
  display: block;
  width: 100%;
  max-width: 600px;
  height: 250px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  loading: lazy;
  border: none;
  referrerPolicy: strict-origin-when-cross-origin;

  ${mixins.mobile(`
    width: 100%;
    margin: 10px auto;
  `)}

  ${mixins.md(`
    width: 100%;
    max-width: 700px;
    margin: 10px auto;
  `)}

  ${mixins.xl(`
    width: 100%;
    max-width: 600px;
  `)}
`;
