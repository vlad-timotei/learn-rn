import React, { Children, useEffect } from 'react';
import { Button, StyleSheet, View, Text, useWindowDimensions } from 'react-native';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const SPRING_CONFIG = {
    damping: 10,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.1,
    stiffness: 50,
};

const BottomMenu = ({isOpen = true, children }) => {
    const dimensions = useWindowDimensions();
    const top = useSharedValue( dimensions.height );

    useEffect( () => {
        if( !isOpen )
            return;
        top.value = withSpring( 
            dimensions.height / 2,
            SPRING_CONFIG,
        );
    }, [isOpen]);

    const gestureHandler = useAnimatedGestureHandler({
        onStart: ( event, context ) => {
            context.startTop = top.value;
        },
        onActive: ( event, context ) => {
            top.value = context.startTop + event.translationY;
        },
        onEnd: () => {
            if ( top.value > dimensions.height / 2 + 200 ){
                top.value = dimensions.height;
            } else {
                top.value = dimensions.height / 2;
            }
        }
    });

    const animatedStyle = useAnimatedStyle(() => {
        return {
            top: withSpring( top.value, SPRING_CONFIG ),
        }
    });

    return (
            <PanGestureHandler onGestureEvent={gestureHandler}>
                <Animated.View style={[styles.menu, animatedStyle]}>
                   {children}
                </Animated.View>
            </PanGestureHandler>
    );
};

export default BottomMenu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    root: {
        backgroundColor: 'red',
        flex: 1,
    },
    menu: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',

    }
});