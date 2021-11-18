import React from 'react';
import { StyleSheet, View } from 'react-native';

import Btn from '../components/Btn';
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
            <Btn
                color='#f89140'
                title="Go to Tags Screen"
                onPress={handlePress}
            />
            <Btn
                title="View images"
                color="#e3305e"
            />
            <Btn
                title="Log Out"
                color="#6b4801"
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
        paddingHorizontal: 20,
    },

});
