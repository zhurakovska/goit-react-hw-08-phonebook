import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  padding: 20px;
  background: url('https://public.mishka.travel/images/mini/7ac6afb462a0e76.jpg')
    center/cover;
`;

export const Title = styled.h1`
  color: rgba(255, 255, 255, 0.8);
  font-size: 28px;
  margin-bottom: 20px;
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
