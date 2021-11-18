import React  from 'react';
import { StyleSheet, View } from 'react-native';

import Btn from '../components/Btn';
import Logo from '../components/Logo';


import useAuth from '../auth/useAuth';

const HomeScreen = ( {navigation} ) => {
    const {logOut} = useAuth();
    return (
        <View style={styles.container}>
            <Logo/>
            <Btn
                color='#f89140'
                title="Tags Screen"
                onPress={() => navigation.navigate('tags') }
            />
            <Btn
                title="View images"
                color="#e3305e"
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
