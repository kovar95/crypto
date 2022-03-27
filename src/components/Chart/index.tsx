import React from 'react';
import './index.scss';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { HistoryItem } from 'services/multifarm/apiTypes';
import TooltipContent from '../TooltipContent';

export enum Unit {
  percentage = '%',
  amount = 'B',
}

interface Props {
  title: string;
  data: HistoryItem[];
  units: Unit;
}

export const Chart: React.FC<Props> = ({ title, data, units }) => {
  const tickFormatter = (value: number) => `${value} ${units}`;

  const showTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
    if (active) {
      return <TooltipContent label={label} value={payload?.[0].value} units={units} />;
    }

    return null;
  };

  return (
    <div className="chart">
      <h4 className="title">{title}</h4>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={750}
          height={500}
          data={data}
          margin={{ top: 0, right: 30, bottom: 0, left: 10 }}
        >
          <CartesianGrid strokeDasharray="0" stroke="#7976b8" />
          <XAxis
            dataKey="date"
            interval={3}
            tick={{
              fill: '#ffffff',
              fontFamily: 'monospace',
              fontSize: '10px',
            }}
            axisLine={{ stroke: '#7976b8' }}
          />
          <YAxis
            allowDecimals
            tick={{
              fill: '#ffffff',
              fontFamily: 'monospace',
              fontSize: '10px',
            }}
            tickFormatter={tickFormatter}
            domain={['dataMin', 'dataMax']}
            axisLine={{ stroke: '#7976b8' }}
            tickCount={6}
          />
          <Tooltip content={showTooltip} />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="1%" stopColor="#ff00ff" stopOpacity={0.1} />
              <stop offset="999%" stopColor="#56d7f7" stopOpacity={0.5} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke="#bc4fe8"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#gradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
