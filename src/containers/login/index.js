import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, KeyboardAvoidingView, Text, View, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import axios from "axios";
import { useToast } from 'native-base';
import Toast from 'react-native-simple-toast';

const Login = ({ navigation }) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [emailerror, setEmailerror] = React.useState("");
    const [passworderror, setPassworderror] = React.useState("");

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!/'/^£$%&*()}{@#~?><>,|=_+¬-])[A-Za-z\d@$!%*.?&]{8,}/

    const toast = useToast();

    const showToasterMessage = (message) => {
        Toast.show(message);
    };

    const handleEmail = (text) => {
        setEmail(text)
        setEmailerror("")
    }
    const handlePassword = (text) => {
        setPassword(text)
        setPassworderror("")
    }
    const handleLoginpress = () => {
        if (!emailRegex.test(email)) {
            setEmailerror("Please enter a valid email")
        }
        if (!passwordRegex.test(password)) {
            setPassworderror("Please enter a valid password")
        }
        else {
            axios.post('https://reqres.in/api/login', {

                "email": email,
                "password": password

            })
                .then(function (response) {
                    console.log("responce", response);
                    showToasterMessage("login successfull")
                    navigation.navigate('Menu')
                })
                .catch(function (error) {
                    showToasterMessage("incorrect email/password")
                    console.log("error", error);
                });
        }
    }
    return (
        <KeyboardAvoidingView style={styles.container}>
            <Text style={styles.sign}>Login</Text>
            <TextInput
                style={styles.textinput}
                placeholder="Email"
                value={email}
                autoCapitalize='none'
                onChangeText={(text) => handleEmail(text)}
            />
            { emailerror ? <Text style={styles.errortext}>{emailerror}</Text> : null}
            <TextInput
                style={styles.textinput}
                placeholder="Password"
                secureTextEntry={true}
                autoCapitalize='none'
                onChangeText={(text) => handlePassword(text)}
            />
            { passworderror ? <Text style={styles.errortext}>{passworderror}</Text> : null}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text>Forgot Password?</Text>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={handleLoginpress}
            >
                <Text style={{ fontWeight: 'bold', }}>Sign In</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                <Text>Don't have Account?</Text>
                <TouchableOpacity>
                    <Text style={styles.create}>Create Account</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: "center",
        padding: 10,
        width: 350,
        backgroundColor: '#428df5',
        borderRadius: 20,
        margin: 40,
    },
    tinyLogo: {
        width: 50,
        height: 50,
        margin: 55,
    },
    textinput: {
        height: 40,
        margin: 12,
        borderRadius: 20,
        borderColor: '#428df5',
        borderWidth: 1,
        textAlign: 'center',
        width: 350,
    },
    lorem: {
        fontSize: 20,
        margin: 30,
        width: 100,
        height: 35,
        textAlign: 'center',
        borderRadius: 20,
        borderColor: '#428df5',
        borderWidth: 1,
    },
    create: {
        fontWeight: 'bold',
    },
    sign: {
        fontWeight: 'bold',
        fontSize: 25,
        margin: 50,
        color: "#428df5"
    },
    errortext: {
        color: 'red',
        margin: 0,
        padding: 0,
    }
});

export default Login;