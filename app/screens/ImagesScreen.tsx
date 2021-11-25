import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, Text, TouchableHighlight, View } from 'react-native';
import Animated, {
  withTiming,
  withDelay,
  withSpring,
} from 'react-native-reanimated';


import pexels from '../api/pexels';
import Pagination from '../components/Pagination';

const search_query = 'dogs';
const per_page = 10;

const ImagesScreen = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [imagesData, setImagesData] = useState<string[]>([]);
  const [page, setPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(2);

  const searchImages = async( query: string, per_page: number, page: number) => {
    setIsLoading( true );
    const result = await pexels.searchImages(query, per_page, page);
    setImagesData( [ ...imagesData, ...result.photos ] );
    setMaxPage( Math.floor( parseInt( result.total_results ) / per_page ) );
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

  // With this version - doesn't work - needs to be remade.
  
  return (
    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <FlatList
          refreshing={isLoading}
          onRefresh={() => { setImagesData([]); setPage(1); }}
          style={{padding: 24}}
          data={imagesData}
          keyExtractor={({ id }) => id}
          renderItem={({ item, index }) => (
            <Animated.View>
              <Animated.Image
              source={{uri: item.src.medium}} style={{width: 150, height: 150, margin: 10}}/>
            </Animated.View>
          )}
          numColumns={2}
          // ListFooterComponent={<LoadMore />}
          onEndReached={nextPage}
          onEndReachedThreshold={0.1} 
        />
      {isLoading && <ActivityIndicator/>}
       {/*<Pagination 
            prev={page > 1}
            next={page < maxPage}
            prevPage={prevPage}
            nextPage={nextPage}
       />*/}
    </View>
  );
};
export default ImagesScreen;
