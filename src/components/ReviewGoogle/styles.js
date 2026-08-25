import styled from 'styled-components';

export const Carousel = styled.div`
  width: 100%;
  padding: 40px 0;
`;

export const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  width: 100%;
`;

export const Card = styled.div`
  padding: 20px;
  border-radius: 12px;
  box-sizing: border-box;

  flex: 0 0 ${({ $focused }) => $focused ? '300px' : '170px'};
  max-width: ${({ $focused }) => $focused ? '300px' : '180px'};
  min-height: ${({ $focused }) => $focused ? '300px' : '180px'};
  max-height: ${({ $focused }) => $focused ? '300px' : '200px'};
  background: ${({ $focused }) => $focused ? '#823A00' : '#FFF0E3'};
  color: ${({ $focused }) => $focused ? '#FFF0E3' : '#823A00'};
  transform: ${({ $focused }) => $focused ? 'scale(1)' : 'scale(0.95)'};
  box-shadow: 0px 4px 6px ${({ $focused }) => $focused ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.1)'};

  transition:
    max-width 500ms ease,
    flex-basis 500ms ease,
    min-height 500ms ease,
    background 500ms ease,
    color 500ms ease,
    transform 500ms ease;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: ${({ $focused }) => $focused ? 'space-between' : 'center'};
  flex-direction: ${({ $focused }) => $focused ? 'row' : 'column'};
  align-items: ${({ $focused }) => $focused ? 'center' : 'center'};
  max-width: 100%;
  max-height: 35px;
  opacity: 0.8;
  margin: 5px;
`;

export const Subtitle = styled.img`
  line-height: 1;
  text-align: center;
  object-fit: contain;
  max-width: ${({ maxWidth }) => maxWidth || '100px'};
  max-height: 30px;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.2;
  text-align: left;
  margin-bottom: 12px;
`;

export const Description = styled.p`
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  text-align: left;
  text-overflow: ${({ $focused }) => $focused ? 'clip' : 'ellipsis'};
  overflow: ${({ $focused }) => $focused ? 'visible' : 'hidden'};
  white-space: ${({ $focused }) => $focused ? 'normal' : 'nowrap'};
`;
