import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Search.scss';

const Search = () => {
  return (
    <div className="search-box">
      <input placeholder=" Search" className="search-input" />
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
    </div>
  );
};

export default Search;
