import React, {Fragment} from 'react';
import SearchBar from './components/SearchBar';
import ContentContainer from './components/ContentContainer';
import NavigationPanel from './components/NavigationPanel';

const HomeView = ({makeQuery, makeContent, albums, isLoading, firstSearched}) => {
  return (
      <Fragment>
        <SearchBar
            makeQuery={makeQuery}
            makeContent={makeContent}
        />
        <ContentContainer
            albums={albums}
            isLoading={isLoading}
            firstSearched={firstSearched}
        />
        <NavigationPanel/>
      </Fragment>
  )
};

export default HomeView;
