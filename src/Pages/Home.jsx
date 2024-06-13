import { useDispatch } from 'react-redux';
import { fetchAllCampers } from '../redux/campers/operation.js';
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
    dispatch(fetchAllCampers());
  }, [dispatch]);

  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.title}>Campers rent</h1>
      </div>
    </>
  );
}
