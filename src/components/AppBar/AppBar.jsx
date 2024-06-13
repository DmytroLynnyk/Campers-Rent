import { NavLink } from 'react-router-dom';

export const AppBar = () => {
  return (
    <header>
      Logo Navigation
      <NavLink to="/">Home</NavLink>
      <NavLink to="/catalog">Campers</NavLink>
    </header>
  );
};
