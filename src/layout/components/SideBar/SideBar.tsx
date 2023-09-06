import React from 'react';
import SearchBox from './component/SearchBox';
import People from './component/People';
import './SideBar.scss';
const SideBar = () => {
  return (
    <aside className="friend-menu">
      <SearchBox />
      <p className="paside">FRIENDS</p>
      <People />
    </aside>
  );
};

export default SideBar;
