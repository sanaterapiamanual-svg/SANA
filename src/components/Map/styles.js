import styled from 'styled-components';
import * as mixins from '../../styles/mixins';

export const MapFrame = styled.iframe`
  width: 100%;
  height: 250px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  loading: lazy;
  border: none;
  referrerPolicy: strict-origin-when-cross-origin;

  ${mixins.mobile(`
    width: 80%;
  `)}
`;
