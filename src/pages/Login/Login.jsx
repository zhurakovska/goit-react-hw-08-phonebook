import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/Auth/operations';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const credentials = { password, email };
    dispatch(loginThunk(credentials));
  };

  return (
    <>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            Email
            <input
              value={email}
              type="email"
              name="email"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              placeholder="Enter your email..."
              autoFocus
              onChange={e => setEmail(e.target.value)}
            ></input>
          </label>
          <label htmlFor="password">
            Password
            <input
              value={password}
              type="password"
              name="password"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title=""
              placeholder="Enter your password..."
              autoFocus
              onChange={e => setPassword(e.target.value)}
            ></input>
          </label>
          <button type="submit">LOGIN</button>
        </form>
      </div>
    </>
  );
};
