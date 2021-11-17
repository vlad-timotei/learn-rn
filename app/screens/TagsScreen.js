import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const TagsScreen = ( { navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Tags Screen</Text>
            <Button
                title="Go to the first screen in the stack"
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
};

export default TagsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});