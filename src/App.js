import { lazy, Suspense, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';


import AppBar from './components/AppBar/AppBar';
import LoaderComponent from './components/Loader/loader';

import { authOperations } from './components/redux/auth';


const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "home-view" */),
);

const RegisterView = lazy(() =>
  import('./views/RegisterView' /* webpackChunkName: "register-view" */),
);
const LoginView = lazy(() =>
  import('./views/LoginView' /* webpackChunkName: "login-view" */),
);
const ContactsView = lazy(() =>
  import('./views/ContactsView' /* webpackChunkName: "contacts-view" */),
);

const NotFoundView = lazy(() =>
  import('./views/NotFoundView' /* webpackChunkName: "not-found-view" */),
);
  function App() {
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);



   return (
     <>
    
    <AppBar />

    <Suspense fallback={<LoaderComponent />}>
      <Switch>
        <PublicRoute path="/" exact>
          <HomeView />
        </PublicRoute>

        <PublicRoute path="/register" restricted redirectTo="/contacts">
          <RegisterView />
        </PublicRoute>

        <PublicRoute path="/login" restricted redirectTo="/contacts">
          <LoginView />
        </PublicRoute>

        <PrivateRoute path="/contacts" redirectTo="/login">
          <ContactsView />
        </PrivateRoute>

        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </Suspense>
  
    </>
  );
}
  export default App;