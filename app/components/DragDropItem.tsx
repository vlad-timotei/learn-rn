import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import CONSTANTS from '../config/constants';

type DragDropItemProps = {
    img: string;
    title: string;
    subtitle: string;
}
const DragDropItem: React.FC<DragDropItemProps> = ({ img, title, subtitle }) => {
    return (
        <View style={styles.container}>
            <Image
                source={{uri: img}}
                style={styles.img}
            />
            <View style={styles.info}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.subtitle}>
                    {subtitle}
                </Text>
            </View>
        </View>
    );
};

export default DragDropItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: CONSTANTS.DRAG_DROP_ITEM_HEIGHT,
        padding: 10,
    },
    img: {
        height: CONSTANTS.DRAG_DROP_ITEM_HEIGHT - 10,
        width: CONSTANTS.DRAG_DROP_ITEM_HEIGHT - 10,
        borderRadius: 4,
    },
    info: {
        marginLeft: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
    },

    subtitle: {
        marginTop: 4,
        fontSize: 12,
        color: 'grey',
    }
}); 