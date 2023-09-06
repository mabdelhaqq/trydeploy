import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faCommentAlt, faBell, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import './Toolbar.scss';
import { useAppContext } from '../../../../helpers/app-store';
import { useNavigate } from 'react-router-dom';

const Toolbar = () => {
  const { username } = useAppContext();
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="main-nav">
      <span className="name-user">{username}</span>
      <FontAwesomeIcon icon={faUserPlus} className="item" />
      <FontAwesomeIcon icon={faCommentAlt} className="item" />
      <FontAwesomeIcon icon={faBell} className="item" />
      <img
        src={'https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=d'}
        className="item img-user"
        alt="imguser"
      />
      <FontAwesomeIcon icon={faArrowDown} className="item" onClick={toggleDropdown} />
      {isDropdownOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-item">Settings</div>
          <div
            className="dropdown-item"
            onClick={() => {
              navigate('/login');
            }}
          >
            Log out
          </div>
        </div>
      )}
    </nav>
  );
};

export default Toolbar;
