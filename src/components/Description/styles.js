import styled from 'styled-components';
import * as mixins from '../../styles/mixins';

export const Description = styled.p`
  margin: 12px 0 0;
  font-family: ${({ theme }) => theme.fonts.tertiary};
  font-size: 26px;
  font-weight: 300;
  line-height: 1.3;

  ${mixins.xs(`
    font-size: 20px;
  `)}

  ${mixins.sm(`
    font-size: 20px;
  `)}

  ${mixins.md(`
    font-size: 24px;
  `)}
`;
