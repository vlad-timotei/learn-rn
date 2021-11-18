import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import Btn from '../components/Btn';
import Logo from '../components/Logo';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Auth from '../auth/auth';
import AuthContext from '../auth/context';

const HomeScreen = ( {navigation} ) => {
    const authContext = useContext(AuthContext);
    const handlePress = () => {
        navigation.navigate('tags');
    }

    const handleLogOut = () => {
        Auth.logout();
        authContext.setUser( null )
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
