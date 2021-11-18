import React from 'react';
import { StyleSheet, Image } from 'react-native';

const Logo = () => {
    return (
        <Image source={require('../assets/tapp.png')} style={styles.logo}/>
    );
};

export default Logo;

const styles = StyleSheet.create({
    logo: {
        width: 100,
        resizeMode: 'contain',
        alignSelf: 'center'
    }
});