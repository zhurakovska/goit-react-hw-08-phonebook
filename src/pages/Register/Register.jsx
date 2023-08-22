import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/Auth/operations';

export const Register = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const credentials = { name, password, email };
    dispatch(registerThunk(credentials));
  };
  return (
    <div>
      <h1>Create account </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <input
            value={name}
            id="name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Enter your login/name..."
            autoFocus
            onChange={e => setName(e.target.value)}
          ></input>
        </label>

        <label htmlFor="email">
          Email
          <input
            value={email}
            id="email"
            type="text"
            name="email"
            placeholder="Enter your email..."
            autoFocus
            onChange={e => setEmail(e.target.value)}
          ></input>
        </label>

        <label htmlFor="password">
          Password
          <input
            value={password}
            id="password"
            type="password"
            name="password"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title=""
            placeholder="Enter your password..."
            autoFocus
            onChange={e => setPassword(e.target.value)}
          ></input>
        </label>
        <button>Register</button>
      </form>
    </div>
  );
};
