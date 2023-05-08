import { Div, Frame, Title } from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/Slices/contactsSlice';
import { addContacts, fetchContacts } from 'redux/contacts/contactsOperations';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { NoContacts } from 'components/NoContacts/NoContacts';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export const Contacts = () => {
  const dispatch = useDispatch();

  const { error, entities: contacts } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onContactFormSubmit = async (newContact, { resetForm }) => {
    try {
      const alreadyExist = contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      );
      if (alreadyExist) {
        resetForm();
        return alert(`${newContact.name} is already in contacts`);
      }

      dispatch(addContacts(newContact));
      toast.success(`New contact ${newContact.name} created!`);
    } catch (error) {
      toast.error('Error!');
    }
    resetForm();
  };
  return (
    <>
      <Frame>
        <Div>
          <Title>Phonebook</Title>
          <ContactForm onContactFormSubmit={onContactFormSubmit} />
          <h2>Contacts</h2>
          <Filter />
          {error ? <NoContacts /> : <ContactList contacts={contacts} />}
        </Div>
      </Frame>
      <ToastContainer />
    </>
  );
};
