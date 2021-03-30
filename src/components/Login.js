import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, ResponseType, useAuthRequest } from 'expo-auth-session';
import { Button } from 'react-native';
import {useState, useEffect} from "react";
import axios from "axios";

const Login = () => {

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
                    Authorization:'Bearer BQAWoHxu-9CUWBKdj8dVv3anQQsVHWzTVeP0fmmrXgkJLGGA0Ui8r-DuWeFim8HZe6729QlL6PxOfiQqLVXZKXMA9XbbW_ktSyYgYRhoxdfJ0qlFQUbcncO3z3--JvomcyJTi3kQj_pUP5LQxtpc7Mnxk2N6PeSuiaw-fTgwVwrvOPRMOrA'
                }
            }).then(console.log)
        }
    }, [response]);

    return (
        <Button
            disabled={!request}
            title="Login"
            onPress={() => {
                promptAsync();
            }}
        />
    );
};

export default Login;
