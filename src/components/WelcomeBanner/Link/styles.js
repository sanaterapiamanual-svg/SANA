import styled from 'styled-components';
import * as mixins from '../../../styles/mixins';

export const ButtonContainer = styled.div`
  max-height: 50px;
`;

export const ButtonLink = styled.a`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.dark.brown0};
  font-family: ${({ theme }) => theme.fonts.tertiary};
  text-decoration: none;
  font-size: 23px;
  font-weight: 400;
  margin-top: 0;

  &:hover,
  &.nav-link-active {
    filter: drop-shadow(0px 2px 1px rgba(53, 24, 0, 0.2));
  }

  ${mixins.md(`
    margin-top: 15px;
  `)}

  ${mixins.xxl(`
    font-size: 24px;
    margin-top: 15px;
  `)}
`;
