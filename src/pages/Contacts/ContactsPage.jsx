import React from 'react';

import { Filter } from 'components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContactsThunk } from 'redux/contactsSlice/operations';
import { selectLoader } from 'redux/selectors';
import { Loader } from 'components/Loader/Loader';
import { FormData } from 'components/Form/FormData';
import { ContactsList } from 'components/ContactLists/ContactsList';

import {
  Title,
  Titleh2,
  Container,
  StyledWrapper,
} from 'components/Form/Form.styled';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoader);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  return (
    <StyledWrapper>
      <Container>
        <Title>Phonebook</Title>
        <FormData />

        <Titleh2>Contacts</Titleh2>
        <Filter />
        {loading ? <Loader /> : <ContactsList />}
      </Container>
    </StyledWrapper>
  );
};
