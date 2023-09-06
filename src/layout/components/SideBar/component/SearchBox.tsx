import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBox.scss';
const SearchBox = () => {
  return (
    <div className="searchb">
      <FontAwesomeIcon icon={faSearch} className="icon-search" />
      <input placeholder="   Search" className="input-search" />
    </div>
  );
};

export default SearchBox;
