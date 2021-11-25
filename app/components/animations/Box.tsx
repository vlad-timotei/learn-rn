import React from 'react';
import { StyleSheet, Button } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
  } from 'react-native-reanimated';

const Box = () => {
    const offset = useSharedValue(0);
  
    const animatedStyles = useAnimatedStyle(() => {
      return {
        transform: [{ translateX: offset.value * 255 }],
      };
    });
  
    return (
      <>
        <Animated.View style={[styles.box, animatedStyles]} />
        <Button onPress={() => (offset.value = withSpring(Math.random()))} title="Move" />
      </>
    );
};

export default Box;

const styles = StyleSheet.create({
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        borderRadius: 10,
        
    }
});