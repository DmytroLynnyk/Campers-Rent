import { Navigation } from '../Navigation/Navigation';
import css from './AppBar.module.css';

export const AppBar = () => {
  return (
    <header className={css.header}>
      <img
        src="../../image/camperLogo.jpg"
        alt="Rent a Camp Logo"
        width="160"
      />
      <Navigation />
    </header>
  );
};
