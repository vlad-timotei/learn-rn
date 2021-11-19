import React from 'react';
import { StyleSheet, TouchableHighlight, Text } from 'react-native';

const PaginationBtn = ({title, onPress}) => {
    return (
        <TouchableHighlight onPress={onPress} style={styles.btn}>
                <Text style={styles.txt}>{title}</Text>
        </TouchableHighlight>
    );
};

export default PaginationBtn;

const styles = StyleSheet.create({
    btn: {
        paddingVertical: 10,
        backgroundColor: 'grey',
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: 'white',
    },
    txt: {
        color: 'white',
        textAlign: 'center'
    }
});
