import styled from 'styled-components';
import * as mixins from '../../styles/mixins';

export const ImagePanel = styled.div`
  width: 100%;
  height: min(90vh, 760px);
  max-width: 900px;
  border-radius: 5px;
  box-sizing: border-box;
  margin: 50px 0 0 45px;

  ${mixins.mobile(`
    height: min(70vh, 520px);
    max-width: none;
    margin: 24px 0 0;
    padding: 0 16px;
  `)}

  ${mixins.lg(`
    max-width: 800px;
    height: min(80vh, 820px);
    margin: 50px 0 0 45px;
    padding: 0 16px;
  `)}

  ${mixins.xl(`
    max-width: 900px;
    height: min(90vh, 760px);
    margin: 50px 0 0 45px;
    padding: 0 16px;
  `)}
`;

export const ImageArea = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
`;

export const ContentPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px;
  width: 100%;
  max-width: 700px;
  height: min(90vh, 760px);

  ${mixins.mobile(`
    width: 100%;
  `)}

  @media (max-width: 767px) {
    max-width: none;
  }
`;

export const ContentWrapper = styled.div`
  width: min(100%, 632px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 20px;
`;

export const Description = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.dark.brown3};
  font-family: ${({ theme }) => theme.fonts.description};
  font-size: 20px;
  line-height: 1.2;
  width: 100%;
`;

export const Address = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.dark.brown0};
  font-family: ${({ theme }) => theme.fonts.atendimento};
  font-size: 23px;
  line-height: 1.2;
  width: 100%;
`;

export const LinksRow = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 20px;
`;
