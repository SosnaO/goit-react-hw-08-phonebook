import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authOperations, authSelectors } from '../components/redux/auth';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LoaderComponent from '../components/Loader/loader.js';
import styles from './Viewstyles.module.css';

export default function LoginView() {
  const dispatch = useDispatch();
  const isLoading = useSelector(authSelectors.getLoading);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
       if (email.trim() === '' || password.trim() === '') {
        alert('Please fill in all fields!')}
        else if (password.length < 7) {
        alert('Passwords must be at least 7 characters long!')
        }
       dispatch(authOperations.logIn({ email, password }));
       reset();
  };
  const reset = () => {
      setEmail("");
      setPassword("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
      <TextField
        label="Email"
        variant="outlined"
        color="primary"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        className={styles.textField}
      />
      <TextField
        label="Password"
        variant="outlined"
        color="primary"
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        className={styles.textField}
      />

      {!isLoading && (
        <Button
        color="primary"
        variant="contained"
          size="large"
          type="submit">
          Log in
        </Button>
      )}

      {isLoading && <LoaderComponent />}
    </form>
    
  );

}





