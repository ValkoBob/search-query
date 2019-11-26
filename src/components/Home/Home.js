import React, {Component} from 'react';
import HomeView from './HomeView';
import Service from "../../services/Service";

export default class Home extends Component {
  service = new Service();
  state = {
    query: '',
    albums: [],
    isLoading: false,
    firstSearched: false
  };

  makeQuery = (e) => {
    e.preventDefault();
    this.setState({
      query: e.target.value
    });
  };

  makeContent = (e) => {
    e.preventDefault();
    const {query} = this.state;
    if (!query) return;
    this.service
        .getAlbums(query)
        .then(albums => {
          const albumsArray = [];
          albums.forEach(album => {
            album.then((item) => {
              albumsArray.push(item)
            })
          });
          console.log(albumsArray);
          this.setState({
            albums: albumsArray,
            firstSearched: true
          })
        })

  };

  render() {
    const {albums, isLoading, firstSearched} = this.state;
    return (
        <HomeView
            makeQuery={this.makeQuery}
            makeContent={this.makeContent}
            albums={albums}
            isLoading={isLoading}
            firstSearched={firstSearched}
        />
    )
  }
}
