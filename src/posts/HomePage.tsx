import Filter from './Filter';
import PostList from './PostList';
import './HomePage.scss';
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <div className="home">
      <Link className="link-new" to="/create">
        <div className="add-post">CLICK HERE TO ADD A NEW POST</div>
      </Link>
      <div className="feed-header row">
        <h3 className="recent col-6">Recent posts</h3>
        <div className="filter col-6">
          <Filter />
        </div>
      </div>
      <div className="posts">
        <PostList />
      </div>
    </div>
  );
};

export default HomePage;
