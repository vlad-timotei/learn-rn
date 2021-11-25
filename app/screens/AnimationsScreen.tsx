import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    useDerivedValue,
    interpolate,
    Extrapolate,
    withDelay,
    withTiming,
  } from 'react-native-reanimated';
import Box from '../components/animations/Box';
import Cirlce from '../components/animations/Circle';


const AnimationsScreen = () => {

    const width = 125;

    function returningWorklet() {
        'worklet';
        return `I have ${width}`;
    }


    function someWorklet (greeting: string) {
        'worklet';
        const mywidth= returningWorklet();
        console.log(greeting, 'From the UI thread', 'Width is', mywidth);
    }

    const style = useAnimatedStyle(
        () => {
        console.log("Running on the UI thread");
        return {
          opacity: 0.5
        };
    });

    // console.log( style );
      

    // someWorklet('hello!');
    return (
        <View style={styles.container}>
            <Cirlce />
        </View>
    );
};

export default AnimationsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});