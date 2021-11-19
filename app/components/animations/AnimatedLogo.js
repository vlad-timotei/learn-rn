import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
    BounceIn,
  } from 'react-native-reanimated';

const AnimatedLogo = () => {   
    return (
          <View style={styles.container}>
            <View style={styles.logo}>
                    <Animated.View style={styles.purple} entering={BounceIn.duration(400).delay(1000)} />
                    <Animated.View style={styles.orange} entering={BounceIn.duration(500).delay(600)} />
                    <Animated.View style={styles.white} entering={BounceIn.duration(700)} />
            </View>
          </View>
     
    );
};

export default AnimatedLogo;

const styles = StyleSheet.create({
    white: {
        borderRadius: 10,
        backgroundColor: 'white',
        alignSelf: 'center',
        width: 20,
        height: 20,
        position: 'absolute',
        bottom: 25,
        right: 25,
    },
    orange: {
      borderRadius: 50,
      backgroundColor: '#f89140',
      alignSelf: 'center',
      width: 60,
      height: 60,
      position: 'absolute',
      bottom: 15,
      right: 15, 
   },
    purple: {
        borderBottomRightRadius: 60,
        borderBottomLeftRadius: 75,
        borderTopRightRadius: 75,
        borderTopLeftRadius: 40,
        backgroundColor: '#e3305e',
        alignSelf: 'center',
        width: 120,
        height: 120,
        position: 'absolute',
 },

    logo: {
        width: 120,
        height: 120,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#3b1159'
    }
});