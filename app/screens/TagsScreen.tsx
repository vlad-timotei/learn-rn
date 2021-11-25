import React, { useContext, useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import AuthContext from '../auth/context';
import Animated, { withDelay, withTiming } from 'react-native-reanimated';

import TagSelector from '../components/TagSelector';
import { TagsNavigationProps } from '../navigation/AppNavigation';

const tags = [
    {
        id: 1,
        title: 'Tag1',
    },
    {
        id: 2,
        title: 'Tag2',
    },
    {
        id: 3,
        title: 'Tag3',
    },
    {
        id: 4,
        title: 'Tag4',
    },
    {
        id: 5,
        title: 'Tag5',
    },
    {
        id: 6,
        title: 'Tag6',
    },
    {
        id: 7,
        title: 'Tag7',
    },
    {
        id: 8,
        title: 'Tag8',
    },
    {
        id: 9,
        title: 'Tag9',
    },
    {
        id: 10,
        title: 'Tag10',
    },
];


const TagsScreen = ( { navigation }: TagsNavigationProps ) => {
    const [ count, setCount ] = useState<number>( 0 );
    const {user:{username}} = useContext(AuthContext);

   
    

    return (
        <View style={styles.container}>
            <TagSelector 
                defaultColor='#0591b0'
                selectedColor='#033540'
                setCount={setCount}
                tags={tags}
            />
            <Text style={styles.count}>{count} {count !== 1 ? 'items': 'item'} selected by {username}</Text>
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
        paddingHorizontal: 10,
    },
    count: {
        color: 'red',
        fontSize: 16,
        fontWeight: '600',
        marginVertical: 25,
        textAlign: 'center',
    }
});
