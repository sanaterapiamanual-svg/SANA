import styled, { css } from 'styled-components';
import * as mixins from '../../../styles/mixins';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 2;
  width: 100%;
  max-width: ${({ compact }) => (compact ? '120px' : '175px')};
  flex: 0 1 ${({ compact }) => (compact ? '120px' : '175px')};
  min-width: 0;
  transition: all 0.25s ease;

  ${mixins.lg(css`
    max-width: ${({ compact }) => (compact ? '120px' : '153px')};
    flex: 0 1 ${({ compact }) => (compact ? '120px' : '153px')};
  `)}

  ${mixins.xl(css`
    max-width: ${({ compact }) => (compact ? '120px' : '165px')};
    flex: 0 1 ${({ compact }) => (compact ? '120px' : '165px')};
  `)}

  ${mixins.xxl(css`
    max-width: ${({ compact }) => (compact ? '120px' : '175px')};
    flex: 0 1 ${({ compact }) => (compact ? '120px' : '175px')};
  `)}
`;

export const LogoIcon = styled.img`
  display: block;
  width: 100%;
  height: auto;
  max-width: ${({ compact }) => (compact ? '52px' : '53px')};
  transition: max-width 0.25s ease;
  margin: 8px 0;

  ${mixins.md(css`
    max-width: ${({ compact }) => (compact ? '54px' : '78px')};
  `)}

  ${mixins.lg(css`
    max-width: ${({ compact }) => (compact ? '64px' : '99px')};
  `)}
`;

export const LogoText = styled.span`
  display: block;
  transition: opacity 0.2s ease, transform 0.2s ease;
`;

export const NavigationLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.dark.brown0};
  text-decoration: none;
  font-size: ${({ compact }) => (compact ? '0' : '18px')};
  font-weight: 400;
  line-height: 1.2;
  transition: font-size 0.25s ease;

  &:hover,
  &.nav-link-active {
    filter: drop-shadow(0px 2px 1px rgba(53, 24, 0, 0.2));

    .underline {
      opacity: 1;
    }
  }

  ${mixins.md(css`
    font-size: ${({ compact }) => (compact ? '0' : '16px')};
  `)}

  ${mixins.lg(css`
    font-size: ${({ compact }) => (compact ? '0' : '21px')};
  `)}

  ${mixins.xl(css`
    font-size: ${({ compact }) => (compact ? '0' : '24px')};
  `)}
`;
