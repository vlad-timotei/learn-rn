import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

const Tag = ({title, onPress, backgroundColor}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress} >
            <View style={[
               { backgroundColor: backgroundColor },
                styles.tag,
            ]}>
                <Text style={styles.txt}>{title}</Text>
            </View>    
        </TouchableWithoutFeedback>
    );
};

export default Tag;

const styles = StyleSheet.create({
    tag: {
        alignItems: 'center',
        borderRadius: 5,
        margin: 2,
        paddingHorizontal: 20,
        paddingVertical: 10,

        shadowColor: '#000000',
        elevation: 5,
        /*
        shaddowOffset: {
            width: 5,
            height: 5,
        },
        shaddowOpacity: 1,
        shaddowRadius: 5,
        */
        width: 85,
    },
    txt: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
    }
});
