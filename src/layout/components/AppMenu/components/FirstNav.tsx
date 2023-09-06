import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFeed,
  faUserFriends,
  faEnvelopeOpen,
  faVideo,
  faPhotoFilm,
  faFile,
  faChartSimple
} from '@fortawesome/free-solid-svg-icons';
import './FirstNav.scss';
import { Link } from 'react-router-dom';
import Authorize from '../../../../posts/Authorize';

const navigationItems = [
  {
    icon: faFeed,
    title: 'Feed',
    path: '/posts',
    protect: false
  },
  {
    icon: faChartSimple,
    title: 'Analytics',
    path: '/analytics',
    protect: true
  },
  {
    icon: faUserFriends,
    title: 'Friends',
    path: '',
    protect: false
  },
  {
    icon: faEnvelopeOpen,
    title: 'Event',
    path: '',
    protect: false
  },
  {
    icon: faVideo,
    title: 'Watch videos',
    path: '',
    protect: false
  },
  {
    icon: faPhotoFilm,
    title: 'Photos',
    path: '',
    protect: false
  },
  {
    icon: faFile,
    title: 'Files',
    path: '',
    protect: false
  }
];

const FirstNav = () => {
  return (
    <nav className="links">
      {navigationItems.map((item, index) => (
        <div className="Links" key={index}>
          {item.protect ? (
            <Authorize allowedRoles={['admin']}>
              <Link to={item.path} className="link">
                <div className="item-links">
                  <FontAwesomeIcon icon={item.icon} className="item-icon" />
                  <span className="title-link">{item.title}</span>
                </div>
              </Link>
            </Authorize>
          ) : (
            <Link to={item.path} className="link" key={index}>
              <div className="item-links">
                <FontAwesomeIcon icon={item.icon} className="item-icon" />
                <span className="title-link">{item.title}</span>
              </div>
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

export default FirstNav;
