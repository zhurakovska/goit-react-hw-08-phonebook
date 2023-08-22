import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  padding: 20px;
  background: url('https://s.zagranitsa.com/images/articles/2198/870x486/8a7b6b4442fe4b60acd85d6131709c96.jpg?1448881793')
    center/cover;
`;

export const Title = styled.h1`
  color: #f7faff;
  font-size: 34px;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: 600;
  text-shadow: -1px -1px 0 #003d73, 1px -1px 0 #003d73, -1px 1px 0 #003d73,
    1px 1px 0 #003d73;
`;
export const TextImageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  .emoji {
    margin-left: 5px;
    font-size: 20px;
  }

  .icon {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    margin: 20px;
    transition: transform 0.3s ease;
  }

  &:hover .icon {
    transform: scale(1.1);
  }
`;

export const Description = styled.p`
  color: #0878a4;
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);

  span {
    font-weight: bold;
    color: #1ecfd6;
  }
`;

export const ImageWrapper = styled.div`
  float: left;
  margin-right: 20px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  align-items: center;
  justify-items: center;
`;
