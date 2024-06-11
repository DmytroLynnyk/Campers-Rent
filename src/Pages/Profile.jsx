// import { useSelector } from 'react-redux';
// import { selectUser } from '../redux/auth/selectors';
import { DocumentTitle } from 'Layout/DocumentTitle';

// const styles = {
//   container: {
//     minHeight: 'calc(100vh - 50px)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontWeight: 500,
//     fontSize: 48,
//     textAlign: 'center',
//   },
// };

export default function ProfilePage() {
  // const user = useSelector(selectUser);
  return (
    <>
      <DocumentTitle>Profile</DocumentTitle>
      <h2>Profile content</h2>
      {/* <div style={styles.container}>
        <h1 style={styles.title}>Profile</h1>
        <div>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      </div> */}
    </>
  );
}
