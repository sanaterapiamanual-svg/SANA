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
    height: min(45vh, 360px);
    max-width: none;
    margin: 24px 0 0;
    padding: 0 16px;
  `)}

  ${mixins.md(`
    height: min(55vh, 480px);
    max-width: 720px;
    margin: 32px auto 0;
    padding: 0 24px;
  `)}

  ${mixins.lg(`
    height: min(80vh, 720px);
    max-width: 720px;
    margin: 32px auto 0;
    padding: 0 20px;
  `)}

  ${mixins.xl(`
    max-width: 900px;
    height: min(90vh, 760px);
    margin: 50px 0 0 100px;
    padding: 0 40px;
  `)}
`;

export const ImageArea = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;

  ${mixins.xl(`
    width: 90%;
  `)}
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
    width: auto;
    max-width: none;
    height: auto;
    margin: 24px 20px;
  `)}

  ${mixins.md(`
    width: auto;
    max-width: 720px;
    height: auto;
    margin: 32px auto 48px;
  `)}

  ${mixins.lg(`
    width: auto;
    max-width: 720px;
    height: 800px;
    margin: 0px auto 48px;
  `)}

  ${mixins.xl(`
    width: auto;
    max-width: 720px;
    margin: 30px 0;
  `)}
`;

export const ContentWrapper = styled.div`
  width: min(100%, 632px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 20px;

  ${mixins.mobile(`
    width: 100%;
  `)}

  ${mixins.md(`
    width: min(80vw, 500px);
  `)}

  ${mixins.xl(`
    width: min(80vw, 700px);
  `)}
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
