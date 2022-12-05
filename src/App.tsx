import './App.scss';
import { Asset } from './components/Asset';
import { useAsset } from './hooks/useAsset';
import Error from 'components/Error';
import Loader from 'components/Loader';

export const App: React.FC = () => {
  const { data: asset, isLoading, error } = useAsset('BSC_Pancakeswap_USDT-BUSD');

  return (
    <div className="app">
      {error && <Error message={error} />}
      {isLoading && <Loader />}
      {asset && <Asset asset={asset} />}
    </div>
  );
};

export default App;
