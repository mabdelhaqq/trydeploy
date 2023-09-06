import { usePostsStore } from '../helpers/post-store';
import './Filter.scss';

const Filter = () => {
  const { verified, toggleVerified } = usePostsStore();

  return (
    <label className="label">
      <input
        type="checkbox"
        checked={verified}
        onChange={toggleVerified}
        className="input-filter"
      />
      Show verified users only
    </label>
  );
};

export default Filter;
