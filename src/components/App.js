import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Layout } from '../Layout/Layout';
import HomePage from '../Pages/Home';
import CampersPage from '../Pages/CampersPage';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CampersPage />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}
