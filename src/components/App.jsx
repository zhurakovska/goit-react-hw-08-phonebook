import { ContactsPage } from 'pages/Contacts/ContactsPage';
import { Home } from 'pages/Home/Home';
import { Login } from 'pages/Login/Login';
import { NotFound } from 'pages/NotFound/NotFound';
import { Register } from 'pages/Register/Register';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="reg" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
