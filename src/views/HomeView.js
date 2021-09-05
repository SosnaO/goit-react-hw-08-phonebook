 import styles from './Viewstyles.module.css';
const HomeView = () => {
   
  return (
    <div className={styles.wrapper}>
        <h1 className={styles.title}>
          Welcome!!!
        </h1>
          <p className={styles.info}>
            Please, <b>Sign up</b> or <b>Log in</b> to have access to the
            Phonebook!
          </p>
    </div>
  );
};

export default HomeView;