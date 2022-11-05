import { Button } from 'components/MainButton/MainButton';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import { deleteContact } from 'redux/operation';

export const Contacts = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <>
      <p>{contact.name}:</p>
      <p>{contact.phone}</p>
      <Button onClick={handleDelete}>Remove contact</Button>
    </>
  );
};

Contacts.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};
