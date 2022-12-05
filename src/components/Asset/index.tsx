import './index.scss';
import { Header } from '../Header';
import { Chart, Unit } from '../Chart';
import { Asset as AssetType } from '../../services/multifarm/apiTypes';

interface Props {
  asset: AssetType;
}

export const Asset: React.FC<Props> = ({ asset }) => {
  const { asset: assetName, gaugeData, maxRewardAPRTotalHistory } = asset;
  return (
    <>
      <Header assetName={assetName} />
      <div className="charts">
        <Chart title="Asset APR (y)" data={maxRewardAPRTotalHistory} units={Unit.percentage} />
        <Chart title="Asset TVL" data={gaugeData?.tvlStakedHistorical} units={Unit.amount} />
      </div>
    </>
  );
};
