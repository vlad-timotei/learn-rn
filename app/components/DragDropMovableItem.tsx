import React from 'react';
import { StyleSheet, View } from 'react-native';
import CONSTANTS from '../config/constants';
import DragDropItem from './DragDropItem';

type DragDropMovableItemProps = {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    positions: { [key: string]: number };
};

// const funct = ( obj: {}, param: string ) => {
//     console.log( obj[ param ] );
// };


const DragDropMovableItem: React.FC<DragDropMovableItemProps> = ({ id, title, subtitle, img, positions}) => {
    return (
        <View style={[styles.container, { top: positions[ id ] * CONSTANTS.DRAG_DROP_ITEM_HEIGHT }]}>
            <DragDropItem 
                img={img}
                title={title}
                subtitle={subtitle}
            />
        </View>
    );
};

export default DragDropMovableItem;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0
    }
});