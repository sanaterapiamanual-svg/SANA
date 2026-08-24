import styled from 'styled-components';

export const DetailsPage = styled.main`
  min-height: 100vh;
  padding: calc(var(--header-height, 100px) + 56px) clamp(20px, 8vw, 120px) 80px;
  background: ${({ theme }) => theme.colors.light.beige0};
  color: ${({ theme }) => theme.colors.dark.brown0};
`;

export const Intro = styled.header`
  max-width: 1200px;
  margin: 0 auto 56px;
  text-align: left;
`;

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 30px;
`;

export const Heading = styled.h1`
  margin: 0 0 16px;
  font-family: ${({ theme }) => theme.fonts.atendimento};
  font-size: clamp(34px, 5vw, 45px);
  font-weight: 400;
  letter-spacing: 2px;
  line-height: 1.05;
`;

export const ServiceSection = styled.article`
  display: grid;
  grid-template-columns: minmax(280px, 0.9fr) minmax(0, 1.1fr);
  align-items: center;
  gap: clamp(32px, 7vw, 110px);
  max-width: 1200px;
  margin: 0 auto 80px;
  padding: 0 0 80px;
  border-bottom: 3px solid ${({ theme }) => theme.colors.light.beige4};

  @media (max-width: 1023px) {
    gap: 40px;
    margin-bottom: 56px;
    padding-bottom: 56px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 28px;
    margin-bottom: 48px;
    padding-bottom: 48px;
  }
`;

export const ServiceImage = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 4 / 4;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(79, 44, 16, 0.12);
`;

export const ServiceContent = styled.div`
  max-width: 600px;
  text-align: left;
`;

export const ServiceTitle = styled.h2`
  margin: 0 0 10px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: clamp(28px, 3vw, 40px);
  font-weight: 400;
  line-height: 1.1;
`;

export const ServiceDetails = styled.p`
  margin: 0 0 24px;
  color: ${({ theme }) => theme.colors.dark.brown3};
  font-family: ${({ theme }) => theme.fonts.description};
  font-size: 20px;
  text-align: justify;
  line-height: 1.35;
`;

export const ServicesList = styled.ul`
  display: grid;
  gap: 10px;
  margin: 0;
  margin-bottom: 40px;
  padding-left: 22px;
  color: ${({ theme }) => theme.colors.dark.brown0};
  font-family: ${({ theme }) => theme.fonts.description};
  font-size: 18px;
  line-height: 1.35;
`;
