import React, { useRef } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import CONSTANTS from '../config/constants';
import DragDropMovableItem from '../components/DragDropMovableItem';


const DOGS = [
    {
        id: 'alaskan-husky',
        name: 'Alaskan Husky',
        img: 'https://bowwowinsurance.com.au/wp-content/uploads/2020/09/shutterstock_15250126-Alaskan-Husky-in-front-of-white-background-thumbnail.jpg'
    },
    {
        id: 'australian-cobberdog',
        name: 'Australian Cobberdog',
        img: 'https://bowwowinsurance.com.au/wp-content/uploads/2020/09/shutterstock_1635272731-Cute-red-abricot-Australian-Cobberdog-Labradoodle-dog-pup-sitting-up-with-one-paw-high-in-air.-Mouth-closed.-Isolated-on-white-background.jpg'
    },
    {
        id: 'bichon-frise',
        name: 'Bichon Frise',
        img: 'https://bowwowinsurance.com.au/wp-content/uploads/2018/10/bichon-frise-700x700.jpg'
    },
    {
        id: 'alaskan-husky-2',
        name: 'Alaskan Husky 2',
        img: 'https://bowwowinsurance.com.au/wp-content/uploads/2020/09/shutterstock_15250126-Alaskan-Husky-in-front-of-white-background-thumbnail.jpg'
    },
    {
        id: 'australian-cobberdog-2',
        name: 'Australian Cobberdog 2',
        img: 'https://bowwowinsurance.com.au/wp-content/uploads/2020/09/shutterstock_1635272731-Cute-red-abricot-Australian-Cobberdog-Labradoodle-dog-pup-sitting-up-with-one-paw-high-in-air.-Mouth-closed.-Isolated-on-white-background.jpg'
    },
    {
        id: 'bichon-frise-2',
        name: 'Bichon Frise 2',
        img: 'https://bowwowinsurance.com.au/wp-content/uploads/2018/10/bichon-frise-700x700.jpg'
    },
    {
        id: 'alaskan-husky-3',
        name: 'Alaskan Husky 3',
        img: 'https://bowwowinsurance.com.au/wp-content/uploads/2020/09/shutterstock_15250126-Alaskan-Husky-in-front-of-white-background-thumbnail.jpg'
    },
    {
        id: 'australian-cobberdog-3',
        name: 'Australian Cobberdog 3',
        img: 'https://bowwowinsurance.com.au/wp-content/uploads/2020/09/shutterstock_1635272731-Cute-red-abricot-Australian-Cobberdog-Labradoodle-dog-pup-sitting-up-with-one-paw-high-in-air.-Mouth-closed.-Isolated-on-white-background.jpg'
    },
    {
        id: 'bichon-frise-3',
        name: 'Bichon Frise 3',
        img: 'https://bowwowinsurance.com.au/wp-content/uploads/2018/10/bichon-frise-700x700.jpg'
    },
    {
        id: 'alaskan-husky-4',
        name: 'Alaskan Husky 4',
        img: 'https://bowwowinsurance.com.au/wp-content/uploads/2020/09/shutterstock_15250126-Alaskan-Husky-in-front-of-white-background-thumbnail.jpg'
    },
    {
        id: 'australian-cobberdog-4',
        name: 'Australian Cobberdog 4',
        img: 'https://bowwowinsurance.com.au/wp-content/uploads/2020/09/shutterstock_1635272731-Cute-red-abricot-Australian-Cobberdog-Labradoodle-dog-pup-sitting-up-with-one-paw-high-in-air.-Mouth-closed.-Isolated-on-white-background.jpg'
    },
    {
        id: 'bichon-frise-4',
        name: 'Bichon Frise 4',
        img: 'https://bowwowinsurance.com.au/wp-content/uploads/2018/10/bichon-frise-700x700.jpg'
    },
    {
        id: 'alaskan-husky-5',
        name: 'Alaskan Husky 5',
        img: 'https://bowwowinsurance.com.au/wp-content/uploads/2020/09/shutterstock_15250126-Alaskan-Husky-in-front-of-white-background-thumbnail.jpg'
    },
    {
        id: 'australian-cobberdog-5',
        name: 'Australian Cobberdog 5',
        img: 'https://bowwowinsurance.com.au/wp-content/uploads/2020/09/shutterstock_1635272731-Cute-red-abricot-Australian-Cobberdog-Labradoodle-dog-pup-sitting-up-with-one-paw-high-in-air.-Mouth-closed.-Isolated-on-white-background.jpg'
    },
    {
        id: 'bichon-frise-5',
        name: 'Bichon Frise 5',
        img: 'https://bowwowinsurance.com.au/wp-content/uploads/2018/10/bichon-frise-700x700.jpg'
    },
];

const listToPositions = ( list: {}, attr: string) => {
    const object = {};
    Object.values( list ).forEach( ( el, i ) => object[ el[ attr ] ] = i );
    return object;
} 

const DragDropScreeen = () => {
    const positions = useRef( listToPositions( DOGS, 'id' )).current;

    return (

            <View style={styles.container}>
            <ScrollView 
                style={styles.scroll}
                contentContainerStyle={{ height: CONSTANTS.DRAG_DROP_ITEM_HEIGHT * DOGS.length }}
            >
                {DOGS.map( dog => (
                    <DragDropMovableItem
                        key={dog.id}
                        id={dog.id}
                        title={dog.name}
                        subtitle={dog.id}
                        img={dog.img}
                        positions={positions}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

export default DragDropScreeen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scroll: {
        flex: 1,
        position: 'relative',
        backgroundColor: 'white',
    }
});