import React from 'react';
import FirstNav from './components/FirstNav';
import SecondNav from './components/SecondNav';
import './AppMenu.scss';
const AppMenu = () => {
  return (
    <aside className="app-menu">
      <FirstNav />
      <p className="pmenu">PAGES YOU LIKE</p>
      <SecondNav />
    </aside>
  );
};

export default AppMenu;
