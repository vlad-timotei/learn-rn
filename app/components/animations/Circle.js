import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    useAnimatedGestureHandler,
  } from 'react-native-reanimated';
import { PanGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';

const Cirlce = () => {

    const pressed = useSharedValue(false);
    const startingPosition = 100;
    const x = useSharedValue(startingPosition);
    const y = useSharedValue(startingPosition);

    const eventHandler = useAnimatedGestureHandler({
        onStart: (event, ctx) => {
          pressed.value = true;
          ctx.startX = x.value;
          ctx.startY = y.value; 
        },
        onActive: (event, ctx) => {
            x.value = ctx.startX + event.translationX;
            y.value = ctx.startY + event.translationY;
          },
        onEnd: (event, ctx) => {
          pressed.value = false;
        },
    });

    const uas = useAnimatedStyle(() => {
        return {
          backgroundColor: pressed.value ? '#FEEF86' : '#001972',
          transform: [{ translateX: x.value }, { translateY: y.value }],
        };
      });

    
    return (
        <GestureHandlerRootView style={styles.container}>
            <View >
                <PanGestureHandler onGestureEvent={eventHandler}>
                    <Animated.View style={[styles.ball, uas]} />
                </PanGestureHandler>
            </View>
        </GestureHandlerRootView>
     
    );
};

export default Cirlce;

const styles = StyleSheet.create({
    ball: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        borderRadius: 50,
        margin: 10,
    },
    container: {
        backgroundColor: 'red',
        flex: 1,
    }
});