import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Animated, { 
    useSharedValue,
    useAnimatedStyle,
    interpolate,
    withTiming,
    withSpring,
    withDelay,
    withRepeat,
    withSequence,
    useAnimatedGestureHandler,
    useAnimatedScrollHandler,
    interpolateColor,
    runOnJS,
} from 'react-native-reanimated';
import { GestureHandlerRootView, PanGestureHandler,  } from 'react-native-gesture-handler';


const Basics = () => {
    const opacity = useSharedValue(0);

    const touchX = useSharedValue( 0 );
    const touchY = useSharedValue( 0 );

    const scrollY = useSharedValue( 0 );

    const gestureHandler = useAnimatedGestureHandler({
        onActive: ( event ) => {
            touchX.value = event.translationX;
            touchY.value = event.translationY;
            scrollY.value = event.translationY;
        },
        onEnd: ( event ) => {
            touchX.value = withSpring( 0 );
            touchY.value = withSpring( 0 );
            scrollY.value = withSpring(0);
        }
    });

    const scrollHandler = useAnimatedScrollHandler( ( event ) => {
        scrollY.value = event.contentOffset.y;
        runOnJS(() => { console.log('h')});
    });

    /*const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: opacity.value,
            transform: [
                {
                    scale: interpolate(
                        opacity.value,
                        [0, 1],
                        [0.5, 1],
                    )
                }
            ]
        }
    });*/

    const scrollViewAnimatedStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: interpolateColor(
                scrollY.value,
                [-50, 0, 50],
                [
                    'grey',
                    'white',
                    'grey',
                ]
            ),
        };
    });

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {translateX: touchX.value},
                {translateY: touchY.value},
            ]
        }
    });

    useEffect(()=>{
        /*opacity.value = withTiming(1, {
            duration: 1000,
        });*/
        //opacity.value = withDelay( 200, withSpring (1) );
       /* opacity.value = withRepeat(
            withSpring(1),
            2,
            true,
        );*/
        opacity.value = withSequence(
            withSpring(1),
            withSpring(0.5),
            withSpring(1),
        );
    });

    return (
        <GestureHandlerRootView style={styles.container} >
            <Animated.ScrollView 
                onScroll={scrollHandler}
                scrollEventThrottle={16}
                style={[
                    {
                    height: '100%',
                    width: '100%',
                    }, scrollViewAnimatedStyle
                ]}
                contentContainerStyle={{
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                
                >
                <PanGestureHandler onGestureEvent={gestureHandler}>
                    <Animated.View style={[styles.circle, animatedStyle]}>
                        <Text>Hi</Text>
                    </Animated.View>
                </PanGestureHandler>
            </Animated.ScrollView>
        </GestureHandlerRootView>
    );
};

export default Basics;

const styles = StyleSheet.create({
    circle: {
        borderRadius: 50,
        height: 30,
        width: 30,
        backgroundColor: 'red',
        alignSelf: 'center',   
    },
    container: {
        flex: 1,
    }
});