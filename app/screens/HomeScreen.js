import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Logo from '../components/Logo';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ( {navigation} ) => {
    const handlePress = () => {
        navigation.navigate('tags');
    }

    const handleLogOut = async () => {
        try {
            await AsyncStorage.removeItem(
                'learn_login',
            );
            navigation.navigate('login');
        } catch (error) {
            console.log( error );
        }
    }

    return (
        <View style={styles.container}>
            <Logo/>
            <Button 
                title="Go to Tags Screen"
                onPress={handlePress}
            />
            <Button 
                title="Log Out"
                onPress={handleLogOut}
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
    },

});
