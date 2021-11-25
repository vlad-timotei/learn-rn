import React  from 'react';
import { StyleSheet, View } from 'react-native';

import Btn from '../components/Btn';
import Logo from '../components/Logo';


import useAuth from '../auth/useAuth';
import { HomeNavigationProps } from '../navigation/AppNavigation';

const HomeScreen = ( {navigation}: HomeNavigationProps ) => {
    const {logOut} = useAuth();
    return (
        <View style={styles.container}>
            <Logo/>
            <Btn
                color='#f89140'
                title="Tags"
                onPress={() => navigation.navigate('tags') }
            />
            <Btn
                title="Dogs"
                color="#e3305e"
                onPress={() => navigation.navigate('images') }
            />
            <Btn
                title="Animation Circle - Demo"
                color="#590904"
                onPress={() => navigation.navigate('animations_circle') }
            />
            <Btn
                title="Animation Logo"
                color="#590904"
                onPress={() => navigation.navigate('animations_logo') }
            />
            <Btn
                title="Log Out"
                color="#6b4801"
                onPress={logOut}
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
