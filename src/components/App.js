import { Route, Routes } from 'react-router-dom';
import { Layout } from 'Layout/Layout';
// import { RestrictedRoute } from 'Routs/RestrictedRoute';
// import { PrivateRoute } from 'Routs/PrivateRoute';
import { Toaster } from 'react-hot-toast';
// import { useAuth } from '../hooks/useAuth';
import HomePage from 'Pages/Home';
import RegisterPage from 'Pages/Register';
import LoginPage from 'Pages/Login';
import ProfilePage from 'Pages/Profile';

export default function App() {
  // const { isRefreshing } = useAuth();

  // return isRefreshing ? (
  //   <b>Refreshing user...</b>
  // ) : (

  //
  return (
    //
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            // element={
            //   <RestrictedRoute
            //     redirectTo="/catalog"
            //     component={<RegisterPage />}
            //   />
            // }
            element={<RegisterPage />}
          />
          <Route
            path="/login"
            // element={
            //   <RestrictedRoute
            //     redirectTo="/catalog"
            //     component={<LoginPage />}
            //   />
            // }
            element={<LoginPage />}
          />
          {/* <Route
            path="/catalog"
            element={
              <RestrictedRoute redirectTo="/login" component={<CampersPage />} />
            }
          /> */}
          {/* <Route
            path="/favorites"
            element={
              <PrivateRoute redirectTo="/login" component={<CampersPage />} />
            }
          /> */}
          <Route
            path="/profile"
            // element={
            //   <PrivateRoute redirectTo="/login" component={<ProfilePage />} />
            // }
            element={<ProfilePage />}
          />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}
