import React from 'react';
import './index.scss';
import Close from '@material-ui/icons/Close';
import useToggle from '../../hooks/useToggle';

type Props = {
  message: string;
};

const Error: React.FC<Props> = ({ message }) => {
  const [opened, toggleOpened] = useToggle(true);

  if (opened) {
    return (
      <div className="error">
        <h2>Error</h2>
        <div className="content">{message.slice(0, 100)}</div>
        <Close className="close" onClick={toggleOpened} />
      </div>
    );
  }

  return null;
};

export default Error;
