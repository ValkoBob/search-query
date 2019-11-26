export default class Service {
  _apiBase = 'https://itunes.apple.com/search?term=';
  _additionalAPI = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=';

  getDataFromITunes = async (url) => {
    const res = await fetch(`${url}`, { method: 'GET'} );
    const {results} = await res.json();
    return results.map((item) => {
      return this._transformItems(
          item.artistId,
          item.artistName,
          item.artworkUrl60,
          item.trackName);
    });
  };

  getDataFromDeezer = async (url) => {
    const res = await fetch(`${url}` );
    const {data} = await res.json();
    return data.map((item) => {
      return this._transformItems(
          item.id,
          item.artist.name,
          item.album.cover_small,
          item.title_short
      );
    });

  };

  getAlbums = async(query) => {
    const resFromITunes = await this.getDataFromITunes(`${this._apiBase}${query}`);
    /*const resFromDeezer = await this.getDataFromDeezer (`${this._additionalAPI}${query}`);*/
    return [...resFromITunes, /*...resFromDeezer*/];
  };

  _transformItems = async (id, artist, image, album ) => {
    return {
      id,
      artist,
      image,
      album
    }
  }
}
