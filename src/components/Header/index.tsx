import React from 'react';
import './index.scss';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { IconButton } from '@material-ui/core';
import useToggle from '../../hooks/useToggle';

interface Props {
  assetName: string;
}

export const Header: React.FC<Props> = ({ assetName }) => {
  const [bookmarked, toggleBookmarked] = useToggle(false);

  return (
    <div className="header">
      <p className="lido">Lido:</p>
      <p className="name">{assetName}</p>
      <IconButton onClick={toggleBookmarked}>
        {bookmarked ? (
          <BookmarkIcon fontSize="large" className="bookmark" />
        ) : (
          <BookmarkBorderIcon fontSize="large" className="bookmark" />
        )}
      </IconButton>
      <p className="problem">Report an error</p>
    </div>
  );
};
