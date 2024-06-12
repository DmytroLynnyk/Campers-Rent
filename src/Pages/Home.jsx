import { DocumentTitle } from '../Layout/DocumentTitle.jsx';
import { useDispatch } from 'react-redux';
import { fetchCampers } from '../redux/campers/operation.js';
import { useEffect } from 'react';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <div style={styles.container}>
        <h1 style={styles.title}>Campers rent</h1>
      </div>
    </>
  );
}
