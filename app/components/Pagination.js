import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { TouchableHighlight } from 'react-native';
import PaginationBtn from './PaginationBtn';

const Pagination = ({prev = true, next=true, nextPage, prevPage}) => {
    return (
        <View style={styles.container}>
            <View style={styles.btn}>
                {prev && <PaginationBtn title="Previous" onPress={prevPage}/>}
            </View>
            <View style={styles.btn}>
                {next && <PaginationBtn title="Next" onPress={nextPage}/>}
            </View>
        </View>
    );
};

export default Pagination;

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignSelf:'flex-end',
    },
    btn: {
        flex: 1,
    }

});
