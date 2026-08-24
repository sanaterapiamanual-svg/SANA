import styled from 'styled-components';
import * as mixins from '../../styles/mixins';

export const BannerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.dark.brown0};
`;

export const BannerLinks = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  gap: 100px;
  margin-top: 0;
`;

export const BannerSection = styled.section`
  width: 100%;
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 500px;
  padding: 40px;
`;

export const BannerSubtitle = styled.p`
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

export const BannerTitle = styled.h1`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 36px;
  letter-spacing: -8%;
  font-weight: 200;
  line-height: 1.2;
  white-space: normal;

  ${mixins.xs(`
    font-size: 26px;
  `)}

  ${mixins.sm(`
    font-size: 26px;
  `)}

  ${mixins.md(`
    font-size: 29px;
  `)}
`;

export const ImgArea = styled.img`
  width: 32px;
  margin: 20px 0;
`;
