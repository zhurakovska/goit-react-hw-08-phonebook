import { PrivateRoute } from 'HOC/PrivateRoute';
import { PublicRoute } from 'HOC/PublicRoute';
import { ContactsPage } from 'pages/Contacts/ContactsPage';
import { Home } from 'pages/Home/Home';
import { Login } from 'pages/Login/Login';
import { NotFound } from 'pages/NotFound/NotFound';
import { Register } from 'pages/Register/Register';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { useEffect } from 'react';
import { refreshThunk } from 'redux/Auth/operations';
import { selectisRefresh } from 'redux/selectors';
import { Loader } from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();

  const isRefresh = useSelector(selectisRefresh);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isRefresh ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="reg"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
