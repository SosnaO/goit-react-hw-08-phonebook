import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../redux/auth';
import Button from '@material-ui/core/Button';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={styles.user}>
      <span className={styles.name}>Welcome, {name}</span>
      <Button
        color="primary"
        variant="contained"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </Button>
    </div>
  );
}