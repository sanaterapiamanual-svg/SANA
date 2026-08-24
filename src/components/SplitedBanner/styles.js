import styled from 'styled-components';
import Image from '../../assets/images/Image.jpg';

export const ImagePanel = styled.div`
  min-height: 100vh;
  border-radius: 5px;
  background-image: url(${Image});
  background-size: cover;
  background-position: center;
  border-radius: 0px 15px 15px 0px;
`;

export const ContentPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 64px 48px;
  max-width: 700px;
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
  color: ${({ theme }) => theme.colors.dark.brown2};
  font-family: ${({ theme }) => theme.fonts.description};
  font-size: 23px;
  line-height: 1.2;
  width: 600px;
`;

export const LinksRow = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-top: 40px;
`;
