import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, ResponseType, useAuthRequest } from 'expo-auth-session';
import { Button, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import {useState, useEffect} from "react";
import axios from "axios";

const Login = ({ setShouldLogin, setUserName }) => {

    // Endpoint
    const discovery = {
        authorizationEndpoint: 'https://accounts.spotify.com/authorize',
        tokenEndpoint: 'https://accounts.spotify.com/api/token',
    };

    const [request, response, promptAsync] = useAuthRequest(
        {
            responseType: ResponseType.Token,
            clientId: 'b0478fcba6974106b0b44571759a10fc',
            scopes: ['user-read-email', 'playlist-modify-public'],
            // In order to follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
            // this must be set to false
            usePKCE: false,
            // For usage in managed apps using the proxy
            redirectUri: makeRedirectUri({
            }),
        },
        discovery
    );

    React.useEffect(() => {
        if (response?.type === 'success') {
            const { access_token } = response.params;
            console.log(response)
            axios({
                method:'get',
                url:'https://api.spotify.com/v1/me',
                headers:{
                    Authorization:'Bearer ' + response.params.access_token
                }
            }).then((resp) => {
                setShouldLogin(false);
                setUserName(resp.data.display_name);
            })
        }
    }, [response]);

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity
            disabled={!request}
            onPress={() => {
                promptAsync();
            }}
            style={styles.button}>
            <Text style={styles.buttonText}> {'Login with Spotify'.toUpperCase()}</Text>
            </TouchableOpacity>    
        </View> 
    );
};

const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      justifyContent: "center",
      padding: 40,
    },
    button: {
      backgroundColor: "#0DA66F",
      padding: 3,
      borderRadius: 10
    },
    buttonText: {
        color: "white",
        textAlign: 'center', 
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 0,
        padding: 8,
    }
  });

export default Login;
