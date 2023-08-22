import {
  AuthParagraph,
  AuthParagraphLink,
  ButtonReg,
  FormContainer,
  FormStyled,
  InputReg,
  LabelReg,
  TitleRegister,
} from 'pages/Register/Register.styled';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunk } from 'redux/Auth/operations';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const credentials = { password, email };
    dispatch(loginThunk(credentials));
  };

  return (
    <>
      <FormContainer>
        <FormStyled onSubmit={handleSubmit}>
          <TitleRegister>Login</TitleRegister>
          <LabelReg htmlFor="email">
            Email
            <InputReg
              value={email}
              type="email"
              name="email"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              placeholder="Enter your email..."
              autoFocus
              onChange={e => setEmail(e.target.value)}
            ></InputReg>
          </LabelReg>
          <LabelReg htmlFor="password">
            Password
            <InputReg
              value={password}
              type="password"
              name="password"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title=""
              placeholder="Enter your password..."
              autoFocus
              onChange={e => setPassword(e.target.value)}
            ></InputReg>
          </LabelReg>
          <ButtonReg type="submit">LOGIN</ButtonReg>
          <AuthParagraph>
            Don't have an account yet?
            <AuthParagraphLink
              to="/reg"
              onClick={() => {
                navigate('/reg');
              }}
            >
              Sign up now
            </AuthParagraphLink>
          </AuthParagraph>
        </FormStyled>
      </FormContainer>
    </>
  );
};
