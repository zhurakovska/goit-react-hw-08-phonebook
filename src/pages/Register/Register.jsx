import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerThunk } from 'redux/Auth/operations';
import {
  ButtonReg,
  FormStyled,
  FormContainer,
  InputReg,
  LabelReg,
  TitleRegister,
  AuthParagraph,
  AuthParagraphLink,
} from './Register.styled';

export const Register = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const credentials = { name, password, email };
    dispatch(registerThunk(credentials));
  };
  return (
    <FormContainer>
      <FormStyled onSubmit={handleSubmit}>
        <TitleRegister>Create account </TitleRegister>
        <LabelReg htmlFor="name">
          Name
          <InputReg
            value={name}
            id="name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Enter your name..."
            autoFocus
            onChange={e => setName(e.target.value)}
          ></InputReg>
        </LabelReg>

        <LabelReg htmlFor="email">
          Email
          <InputReg
            value={email}
            id="email"
            type="text"
            name="email"
            placeholder="Enter your email..."
            autoFocus
            onChange={e => setEmail(e.target.value)}
          ></InputReg>
        </LabelReg>

        <LabelReg htmlFor="password">
          Password
          <InputReg
            value={password}
            id="password"
            type="password"
            name="password"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title=""
            placeholder="Enter your password..."
            autoFocus
            onChange={e => setPassword(e.target.value)}
          ></InputReg>
        </LabelReg>
        <ButtonReg>Register</ButtonReg>
        <AuthParagraph>
          Do you have an account already?
          <AuthParagraphLink
            to="/login"
            onClick={() => {
              navigate('/login');
            }}
          >
            Sign in
          </AuthParagraphLink>
        </AuthParagraph>
      </FormStyled>
    </FormContainer>
  );
};
