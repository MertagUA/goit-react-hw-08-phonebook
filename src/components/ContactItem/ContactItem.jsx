import { Item, ContactName, DeleteButton } from './ContactItem.styled';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/Slices/contactsSlice';
import userIcon from '../../assets/images/userIcon.png';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(getContacts);

  return (
    <Item>
      <img src={userIcon} alt={name} width="30px" height="30px" />
      <ContactName>{name}</ContactName>
      <p>{number}</p>
      <DeleteButton
        type="button"
        disabled={isLoading}
        onClick={() => {
          dispatch(deleteContact(id));
          toast.success(`Contact ${name} deleted!`);
        }}
      >
        Delete
      </DeleteButton>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
