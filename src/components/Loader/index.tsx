import './index.scss';
import { InfinitySpin as Spinner } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="loader">
      <Spinner width={'200'} color="#ffffff" />
    </div>
  );
};

export default Loader;
