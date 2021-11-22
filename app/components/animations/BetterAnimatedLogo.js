import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View, Text } from 'react-native';
import { TapGestureHandler } from 'react-native-gesture-handler';
import Animated, {
    useAnimatedStyle,
    useSharedValue, withDelay, withSpring,
    interpolate,
    withSequence,
    useAnimatedGestureHandler,
    runOnJS,
  } from 'react-native-reanimated';
import BottomMenu from './BottomMenu';

const BetterAnimatedLogo = () => {
    const [ isOpen, setIsOpen ] = useState( false );
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

    const openMenu = () => {
        setIsOpen( prev => !prev );

    }

    const handleTap = useAnimatedGestureHandler({
        onStart: () => {
          runOnJS(openMenu);
        }
    });

    return (
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={openMenu}>
              <View>
                  <Animated.View style={[styles.logo, logoAnimatedStyle.logo]}>
                          <Animated.View style={[styles.red, logoAnimatedStyle.red]} />
                          <Animated.View style={[styles.orange, logoAnimatedStyle.orange]} />
                          <Animated.View style={[styles.white, logoAnimatedStyle.white]} />
                  </Animated.View>
              </View>
          </TouchableWithoutFeedback>
          <BottomMenu isOpen={isOpen}>
              <Text>Welcome here!</Text>
          </BottomMenu>
        </View>
   
  );

    return (
          <View style={styles.container}>
            <TapGestureHandler onGestureEvent={handleTap}>
                <View>
                    <Animated.View style={[styles.logo, logoAnimatedStyle.logo]}>
                            <Animated.View style={[styles.red, logoAnimatedStyle.red]} />
                            <Animated.View style={[styles.orange, logoAnimatedStyle.orange]} />
                            <Animated.View style={[styles.white, logoAnimatedStyle.white]} />
                    </Animated.View>
                </View>
            </TapGestureHandler>
            <BottomMenu isOpen={isOpen}/>
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
        marginTop: 100,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#3b1159'
    }
});