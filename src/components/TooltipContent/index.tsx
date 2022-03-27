import React from 'react';
import './index.scss';
import FiberManualRecord from '@material-ui/icons/FiberManualRecord';
import { ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { Unit } from '../Chart';
import { format } from 'date-fns';

const dateFormat = 'MMMM dd, yyyy';

type Props = {
  label: string | undefined;
  value: ValueType | undefined;
  units: Unit;
};

const TooltipContent: React.FC<Props> = ({ label, value, units }) => {
  return (
    <div className="tooltip">
      <p>
        <FiberManualRecord className="fiber" /> {units === Unit.percentage ? 'APR: ' : 'TVL: '}
        {value}
        {units}
      </p>
      {label && <p>{format(new Date(`${label}, 2022`), dateFormat)}</p>}
    </div>
  );
};

export default TooltipContent;
