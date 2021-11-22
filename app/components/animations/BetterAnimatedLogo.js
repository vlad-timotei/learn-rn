import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue, withDelay, withSpring,
    interpolate,
    withSequence,
  } from 'react-native-reanimated';

const BetterAnimatedLogo = () => {
    const opacity = {
        white: useSharedValue( 0 ),
        orange: useSharedValue( 0 ),
        red: useSharedValue( 0 ),
    };

    const rotation = useSharedValue( 0 );

    useEffect(() => {
        opacity.white.value = withDelay(500, withSpring( 1 ) );
        opacity.orange.value = withDelay(1000, withSpring( 1 ) );
        opacity.red.value = withDelay(1500, withSpring( 1 ) );
        rotation.value = withDelay( 1800, withSequence(
            withSpring( 20 ),
            withSpring( 0 ),
        ));
    }, []);

    const logoAnimatedStyle = {
        white: useAnimatedStyle(()=> {
            return {
                opacity: opacity.white.value,
                transform: [
                    {
                        scale: interpolate(
                            opacity.white.value,
                            [0, 1],
                            [0.5, 1],
                        )
                    }
                ]
            }
        }),
        orange: useAnimatedStyle(()=> {
            return {
                opacity: opacity.orange.value,
                transform: [
                    {
                        scale: interpolate(
                            opacity.orange.value,
                            [0, 1],
                            [0.5, 1],
                        )
                    }
                ]
            }
        }),
        red: useAnimatedStyle(()=> {
            return {
                opacity: opacity.red.value,
                transform: [
                    {
                        scale: interpolate(
                            opacity.red.value,
                            [0, 1],
                            [0.5, 1],
                        ),
                    },
                ]
            }
        }),
        logo: useAnimatedStyle(()=> {
            return {
                transform: [
                    { rotate: `${rotation.value}deg` },
                ]
            }
        }),
    };
    return (
          <View style={styles.container}>
            <Animated.View style={[styles.logo, logoAnimatedStyle.logo]}>
                    <Animated.View style={[styles.red, logoAnimatedStyle.red]} />
                    <Animated.View style={[styles.orange, logoAnimatedStyle.orange]} />
                    <Animated.View style={[styles.white, logoAnimatedStyle.white]} />
            </Animated.View>
          </View>
     
    );
};

export default BetterAnimatedLogo;

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
    red: {
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