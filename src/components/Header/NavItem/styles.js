import styled from 'styled-components';
import * as mixins from '../../../styles/mixins';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 120px;
  height: 35px;

  ${mixins.lg(`
    width: 153px;
  `)}

  ${mixins.xl(`
    width: 165px;
  `)}

  ${mixins.xxl(`
    width: 175px;
  `)}
`;

export const NavigationLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.dark.brown0};
  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;

  &:hover,
  &.nav-link-active {
    filter: drop-shadow(0px 2px 1px rgba(53, 24, 0, 0.2));

    .underline {
      opacity: 1;
    }
  }
  ${mixins.lg(`
    font-size: 22px;
  `)}

  ${mixins.xl(`
    font-size: 24px;
  `)}
`;

export const Underline = styled.span`
  display: block;
  width: 15px;
  height: 3px;
  background: ${({ theme }) => theme.colors.dark.brown0};
  opacity: 0;
  transition: opacity 0.2s ease;
  filter: drop-shadow(0px 2px 4px rgba(31, 29, 28, 0.63));
`;
