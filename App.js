// // import ContactList from './components/ContactList/ContactList'
// // import ContactForm from './components/ContactForm/ContactForm'
// // import Filter from './components/Filter/Filter'
// // import styles from './components/ContactForm/ContactForm.module.css'

// import { lazy, Suspense, useEffect } from 'react';
// import { Switch, Route } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

// // import { ToastContainer } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// import PrivateRoute from './components/PrivateRoute';
// import PublicRoute from './components/PublicRoute';

// import Container from './components/Container';
// import AppBar from './components/AppBar';
// import LoaderComponent from './components/LoaderComponent';

// import { authOperations } from './redux/auth';
// const HomeView = lazy(() =>
//   import('./views/HomeView' /* webpackChunkName: "home-view" */),
// );

// const RegisterView = lazy(() =>
//   import('./views/RegisterView' /* webpackChunkName: "register-view" */),
// );
// const LoginView = lazy(() =>
//   import('./views/LoginView' /* webpackChunkName: "login-view" */),
// );
// const ContactsView = lazy(() =>
//   import('./views/ContactsView' /* webpackChunkName: "contacts-view" */),
// );

// const NotFoundView = lazy(() =>
//   import('./views/NotFoundView' /* webpackChunkName: "not-found-view" */),
// );
//   function App() {
//     const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(authOperations.getCurrentUser());
//   }, [dispatch]);



//    return (
//     <Container>
//     <AppBar />

//     <Suspense fallback={<LoaderComponent />}>
//       <Switch>
//         <PublicRoute path="/" exact>
//           <HomeView />
//         </PublicRoute>

//         <PublicRoute path="/register" restricted redirectTo="/contacts">
//           <RegisterView />
//         </PublicRoute>

//         <PublicRoute path="/login" restricted redirectTo="/contacts">
//           <LoginView />
//         </PublicRoute>

//         <PrivateRoute path="/contacts" redirectTo="/login">
//           <ContactsView />
//         </PrivateRoute>

//         <Route>
//           <NotFoundView />
//         </Route>
//       </Switch>
//     </Suspense>

//     {/* // <ToastContainer autoClose={3700} position="top-center" /> */}
//     </Container>






//     // <div className={styles.phonebook}>
//     // <h1>Phonebook</h1>
//     // <ContactForm />
//     // <h2>Contacts</h2>
//     // <Filter />
//     // <ContactList /> 
//     // </div>
//   );
// }
//   export default App;