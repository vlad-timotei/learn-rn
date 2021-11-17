import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const HomeScreen = ( {navigation} ) => {

    const handlePress = () => {
        navigation.navigate('tags');
    }

    return (
        <View style={styles.container}>
            <Button 
                title="Go to Tags Screen"
                onPress={handlePress}
            />

        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});