import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, Text, TouchableHighlight, View } from 'react-native';

import pexels from '../api/pexels';
import Pagination from '../components/Pagination';

const search_query = 'dogs';
const per_page = 6;

const ImagesScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [imagesData, setImagesData] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(2);

  const searchImages = async( query, per_page, page) => {
    setIsLoading( true );
    const result = await pexels.searchImages(query, per_page, page);
    setImagesData( result.photos );
    setMaxPage( parseInt( result.total_results / per_page ) );
    setIsLoading( false );
  }


  const nextPage = () => {
    page < maxPage && setPage( prev => prev + 1 );
  }

  const prevPage = () => {
    page > 1 && setPage( prev => prev - 1 );
  }

  useEffect(() => {
    searchImages(search_query, per_page, page );
  }, [ page ]);

  return (
    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
      {isLoading ? <ActivityIndicator/> : (
        <>
        <FlatList
          refreshing={isLoading}
          onRefresh={() => searchImages(search_query, per_page, page )}
          style={{padding: 24}}
          data={imagesData}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <Image source={{uri: item.src.medium}} style={{width: 150, height: 150, margin: 10}}/>
          )}
          numColumns={2}
        />
        </>
      )}
        <Pagination 
            prev={page > 1}
            next={page < maxPage}
            prevPage={prevPage}
            nextPage={nextPage}
        />
    </View>
  );
};
export default ImagesScreen;
