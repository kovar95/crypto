import React from 'react';
import './index.scss';
import { Header } from '../Header';
import { Chart, Unit } from '../Chart';
import { Asset as AssetType } from '../../services/multifarm/apiTypes';

interface Props {
  asset: AssetType;
}

export const Asset: React.FC<Props> = ({ asset }) => {
  const { asset: assetName, selected_farm } = asset;
  return (
    <>
      <Header assetName={assetName} />
      <div className="charts">
        <Chart title="Asset APR (y)" data={selected_farm[0].aprHistory} units={Unit.percentage} />
        <Chart title="Asset TVL" data={selected_farm[0].tvlStakedHistory} units={Unit.amount} />
      </div>
    </>
  );
};
