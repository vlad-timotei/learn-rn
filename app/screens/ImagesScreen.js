import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';

import pexels from '../api/pexels';

const ImagesScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [imagesData, setImagesData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const searchImages = async( query, per_page, page) => {
    const result = await pexels.searchImages(query, per_page, page);
    setImagesData( result.photos );
    setLoading( false );
  }

  useEffect(() => {
    searchImages('people', 10, 1);
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          refreshing={refreshing}
          onRefresh={() => {
            setRefreshing( true );
            searchImages('dogs', 10, 1);
            setRefreshing( false );
          }}
          data={imagesData}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Image source={{uri: item.src.medium}} style={{width: 200, height: 200}}/>
          )}
        />
      )}
    </View>
  );
};

export default ImagesScreen;