import styled from 'styled-components';
import * as mixins from '../../styles/mixins';

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 26px;
  height: 100%;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;

  ${mixins.mobile(`
    position: relative;
    justify-content: center;
    padding: 0 48px;
  `)}
`;

export const MenuButton = styled.button`
  position: absolute;
  left: 16px;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  border: 0;
  border-radius: 6px;
  background: #ffc493;
  color: ${({ theme }) => theme.colors.dark.brown0};
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 2;

  &:hover {
    box-shadow: 0 4px 10px rgba(53, 24, 0, 0.14)
  }

  ${mixins.sm(`
    width: 35px;
    height: 35px;
  `)}

  ${mixins.md(`
    display: none;
  `)}

  ${mixins.lg(`
    display: none;
  `)}

  ${mixins.xl(`
    display: none;
  `)}

  ${mixins.xxl(`
    display: none;
  `)}
`;

export const MenuIcon = styled.span`
  width: 15px;
  height: 10px;
  border-top: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 0;
    width: 10px;
    border-top: 2px solid currentColor;
  }
`;

export const MenuCloseButton = styled.button`
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.dark.brown0};
  font-size: 32px;
  line-height: 1;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const MobileMenu = styled.div`
  display: none;
  z-index: 3;

  @media (max-width: 767px) {
    position: absolute;
    width: 80vw;
    height: 100vh;
    top: 0;
    left: 0;
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    padding: 18px;
    background: ${({ theme }) => theme.colors.light.beige0};
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

    .nav-group-container {
      align-items: flex-start;
      width: 100%;
    }
     
    a {
      align-items: flex-start;
    }
    
    .nav-group {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
    }
  }
`;

export const PageHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;

  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1 / -1;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  height: ${({ compact }) => (compact ? 'var(--header-height-compact)' : 'var(--header-height)')};
  background: ${({ compact }) => (compact ? 'rgba(242, 225, 211, 0.38)' : 'transparent')};
  box-shadow: ${({ compact }) => (compact ? '0 2px 7px rgba(255, 199, 153)' : 'none')};
  backdrop-filter: ${({ compact }) => (compact ? 'blur(6px)' : 'none')};
  transition: height 0.25s ease, background 0.25s ease, box-shadow 0.25s ease, backdrop-filter 0.25s ease;

  ${mixins.md(`
    --header-height-compact: 90px;
    --header-height: 150px;
  `)}

  ${mixins.lg(`
    --header-height: 180px;
  `)}

  ${mixins.xxl(`
    --header-height-compact: 95px;
    --header-height: 180px;
  `)}
`;
