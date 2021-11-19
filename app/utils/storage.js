import AsyncStorage from '@react-native-async-storage/async-storage';

const prefix = 'learnRN';

const set = async ( key, value ) => {
    try {
        await AsyncStorage.setItem( prefix + key, JSON.stringify( value ));
        // console.log(`I am setting ${key} with value of `, value);
    } catch ( error ) {
        console.log( error );
    }  
}


const get = async ( key ) => {
    try {
        const item = await AsyncStorage.getItem( prefix + key );
        const value = JSON.parse( item );
        // console.log(`I am getting ${key} with value of `, value);
        if ( !value ) return null;
            return value;

    } catch (error) {
        console.log(error);
    }

}

const remove = async ( key ) => {
    try {
        await AsyncStorage.removeItem( prefix + key );
        // console.log(`I am removinfg ${key}`);

    } catch (error) {
        console.log(error);
    }

}

export default {
    set,
    get,
    remove,
};