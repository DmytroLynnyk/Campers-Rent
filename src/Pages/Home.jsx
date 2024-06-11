import { DocumentTitle } from 'Layout/DocumentTitle';
import { useSelector } from 'react-redux';
import { fetchCampers } from '../redux/campers/operation.js';
import { selectData } from '../redux/campers/selectors.js';

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
  fetchCampers();
  const result = useSelector(selectData);
  console.log(result);
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <div style={styles.container}>
        <h1 style={styles.title}>Campers rent</h1>
      </div>
    </>
  );
}
