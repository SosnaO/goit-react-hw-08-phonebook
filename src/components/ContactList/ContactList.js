import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { contactsOperations, contactsSelectors} from '../redux/contacts'; 
import ContactlistItem from './ContactListItem'
import styles from './contactListItem.module.css'

function  ContactList ()  { 
  const dispatch = useDispatch();
  const visibleContacts = useSelector(contactsSelectors.getVisibleContacts);
  const onDelete = id => dispatch(contactsOperations.deleteContact(id))
  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);
   return (
    <ul className={styles.list}>
    {visibleContacts.map(({ name, number, id }) => ( 
     <ContactlistItem 
     key={id}
     id={id}
     name={name}
     number={number}
     onDelete={()=>onDelete(id)}
     
    />
     ))}
    </ul>
)};
     
export default ContactList;
     
   