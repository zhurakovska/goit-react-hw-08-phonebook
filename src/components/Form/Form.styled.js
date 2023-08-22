import { styled } from 'styled-components';

export const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: url('https://s.zagranitsa.com/images/articles/2198/870x486/8a7b6b4442fe4b60acd85d6131709c96.jpg?1448881793')
    center/cover;
`;

export const Title = styled.h1`
  color: #003d73;
  margin-bottom: 20px;
  font-size: 40px;
`;

export const Titleh2 = styled.h2`
  color: #003d73;
  margin-bottom: 20px;
  font-size: 30px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  color: #0878a4;
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 20px;
  text-transform: uppercase;
  color: #0878a4;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  margin-left: 20px;
  width: 176px;
  border: 1px solid #1ecfd6;
`;

export const Button = styled.button`
  background-color: #0878a4;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 18px;
  margin-top: 20px;

  &:hover {
    background-color: #003d73;
  }
`;

export const FilterInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  width: 230px;
  border: 1px solid #1ecfd6;
`;

export const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 20px;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
`;

export const DeleteButton = styled.button`
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 20px;
  font-size: 16px;
  padding: 10px 20px;
  &:hover {
    background-color: #c05640;
  }
`;

export const ContactName = styled.span`
  margin-right: 10px;
  color: #003d73;
  font-weight: bold;
  font-size: 18px;
`;

export const ContactNumber = styled.span`
  color: #0878a4;
`;
