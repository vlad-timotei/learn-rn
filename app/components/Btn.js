import React from 'react';
import { StyleSheet, TouchableOpacity, Text} from 'react-native';

const Btn = ({title, color, onPress}) => {
    return (
        <TouchableOpacity style={[
            styles.container,
            {
                backgroundColor: color
            }]}
            onPress={onPress}>
            <Text style={styles.btn}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Btn;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        marginVertical: 10,
        elevation: 25,
    },
    btn: {
        fontSize: 19,
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
});
