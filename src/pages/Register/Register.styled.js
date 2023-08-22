import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: url('https://public.mishka.travel/images/mini/7ac6afb462a0e76.jpg')
    center/cover;
`;

export const FormStyled = styled.form`
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

export const TitleRegister = styled.h1`
  color: #003d73;
  margin-bottom: 20px;
  font-size: 40px;
  margin-top: 0px;
`;

export const LabelReg = styled.label`
  color: #0878a4;
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 20px;
  text-transform: uppercase;
`;

export const InputReg = styled.input`
  padding: 10px;
  border: 1px solid #1ecfd6;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 100%;
`;

export const ButtonReg = styled.button`
  background-color: #1ecfd6;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 20px;

  &:hover {
    background-color: #0878a4;
  }
`;
