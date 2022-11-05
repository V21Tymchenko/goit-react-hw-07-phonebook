import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/operation';
import { getError, getIsLoading } from '../../redux/selecors';
import { Title } from 'components/Title/Title';
import { FilterContact } from 'components/FilterContact/FilterContact';
import { ContactsForm } from '../ContactsForm/ContactsForm/ContactsForm';
import { Audio } from 'react-loader-spinner';
import s from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section className={s.section}>
      <div className={s.container}>
        <div>
          {isLoading && (
            <div className={s.loading}>
              <Audio
                height="80"
                width="80"
                radius="9"
                color="blue"
                ariaLabel="loading"
                wrapperStyle
              />
            </div>
          )}
          {error && <p className={s.loading}>{error}</p>}
          <Title>Phonebook</Title>
          <ContactsForm />
        </div>
        <div>
          <Title>Contacts</Title>
          <div>
            <FilterContact />
          </div>
        </div>
      </div>
    </section>
  );
};
