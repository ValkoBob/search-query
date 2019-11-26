import React from 'react';
import GridAlbums from './GridAlbums';

const ContentContainer = ({albums, isLoading, firstSearched}) => {
  const grid = albums.map(([album, artist, id, image]) =>
      <GridAlbums
          id={id}
          artist={artist}
          album={album}
          image={image}
      />
  );
  const content = firstSearched ? grid : 'Make your first search';
  return (
      <div>{content}</div>
  );
};

export default ContentContainer;
