import React, {Fragment} from 'react';

const GridAlbum = ({id, artist, album, image}) => {
  return (
      <Fragment>
        <div className="card-header">{artist}</div>
          <h4 className="card-title">{album}</h4>
        <img src={image} alt=""/>
      </Fragment>
  )
};

export default GridAlbum;
