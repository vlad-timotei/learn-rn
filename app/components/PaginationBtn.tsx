import React from 'react';
import { StyleSheet, TouchableHighlight, Text } from 'react-native';

type PaginationBtnProps = {
    title: string;
    onPress: () => void;
};

const PaginationBtn: React.FC<PaginationBtnProps> = ({title, onPress}) => {
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
