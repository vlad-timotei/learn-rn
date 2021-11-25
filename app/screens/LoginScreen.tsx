import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';

import Auth from '../auth/auth'
import useAuth from '../auth/useAuth';

import Btn from '../components/Btn';
import Logo from '../components/Logo';

const LoginScreen = () => {
    const { setUser } = useAuth();

    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState<boolean>();

    const handleLogin = async() => {
        const result = await Auth.login( username, password );
        if ( result.error )
            return setError( !result.error )
        setError( false );
        setUser( result.value );
    }

    return (
        <View style={styles.container}>
            <Logo />
            <TextInput
                style={styles.input}
                onChangeText={setUsername}
                value={username}
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType='email-address'
                placeholder='Email'
            />
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                autoCapitalize='none'
                autoCorrect={false}
                placeholder='Password'
                secureTextEntry
            />
            {error && <Text style={styles.error}>{error}</Text>}
            <Btn title="Login" color="#eb397d" onPress={handleLogin}/>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3b1159',
        flex: 1,
        paddingHorizontal: 15,
    },
    error: {
        color: '#fff',
        paddingLeft: 20,
    },
    input: {
        backgroundColor: '#ccc',
        borderRadius: 25,
        marginVertical: 10,
        paddingHorizontal: 15, 
    }
});