import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, Text, TouchableHighlight, View } from 'react-native';

import pexels from '../api/pexels';

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
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Image source={{uri: item.src.medium}} style={{width: 150, height: 150, margin: 10}}/>
          )}
          numColumns={2}
        />
        </>
      )}
      <View style={{flexDirection:'row', alignSelf:'flex-end'}}>
            <TouchableHighlight
                style={{
                    flex:1,
                    marginRight: 1,
                    paddingVertical: 10,
                    backgroundColor: page === 1 ? 'white' : 'grey',
                }}
                onPress={prevPage}

            >
               <Text style={{color: 'white', textAlign: 'center'}}>Previous</Text>
            </TouchableHighlight>
            <TouchableHighlight
                style={{flex:1, marginRight: 1, paddingVertical: 10, backgroundColor: 'grey'}}
                onPress={nextPage}
            >
                <Text style={{color: 'white', textAlign: 'center'}}>Next</Text>
            </TouchableHighlight>
        </View>
    </View>
  );
};

export default ImagesScreen;