import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { auth } from '../firebase';

const RegisterScreen = ({ navigation }) => {

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[imageUrl, setImageUrl] = useState('');

    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .then(authUser => {
            authUser.user.updateProfile({
                displayName: name,
                photoURL: imageUrl || 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', 
            })
        }).catch(error => alert(error.message));
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: 'Login',
        });
    }, [navigation]);

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />
            <Text h3 style={{ marginBottom: 50, color: "white"}}>
                Create a Signal Account
            </Text>

            <View style={styles.inputContainer}>
                <Input 
                    style={{ color: "white"}}
                    placeholder="Full Name" 
                    autoFocus 
                    type="text"
                    value = {name}
                    onChangeText={(text) => setName(text)} 
                />
            </View> 
            <View style={styles.inputContainer}>
                <Input 
                    style={{ color: "white"}}
                    placeholder="Email" 
                    type="email"
                    value = {email}
                    onChangeText={(text) => setEmail(text)} 
                />
            </View>
            <View style={styles.inputContainer}>
                <Input 
                    style={{ color: "white"}}
                    placeholder="Password" 
                    type="password"
                    secureTextEntry
                    value = {password}
                    onChangeText={(text) => setPassword(text)} 
                />
            </View>
            <View style={styles.inputContainer}>
                <Input 
                    style={{ color: "white"}}
                    placeholder="Profile Picture URL" 
                    type="text"
                    value = {imageUrl}
                    onChangeText={(text) => setImageUrl(text)} 
                    onSubmitEditing={register}
                />
            </View>
            <Button raised onPress={register} containerStyle={styles.button} title='Register' />
            <View style={{height: 130}} />
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
    },
    inputContainer: {
        width: 300,
    },button: {
        width: 200,
        marginTop: 10,
    },
})
