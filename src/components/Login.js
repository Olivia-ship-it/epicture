import React, { Component } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { View, Text, Button } from 'react-native';
import { makeRedirectUri, ResponseType, useAuthRequest } from 'expo-auth-session';
import * as AuthSession from "expo-auth-session";



const Login = () => {

  WebBrowser.maybeCompleteAuthSession();

  const discovery = {
      authorizationEndpoint: 'https://api.imgur.com/oauth2/authorize',
      tokenEndpoint: 'https://api.imgur.com/oauth2/token',
  };

  const [request, response, promptAsync] = useAuthRequest(
      {
          responseType: ResponseType.Token,
          clientId: '056df242059635c',
          redirectUri: makeRedirectUri(),
          scopes: [],
      },
      discovery
  );

    const login = async () => {
        let results = await AuthSession.startAsync({
            authUrl: "https://api.imgur.com/oauth2/authorize?client_id=056df242059635c&response_type=token",
            returnUrl: "http://localhost:19006/"
        })
        console.log(results);
    }

    React.useEffect(() => {
        if (response?.type === 'success') {
            const { access_token } = response.params;
        }
    }, [response]);
  
  return (      
    <Button
      disabled={!request}
      title="Authenticate with Imgur"
      onPress={() => {
          login();
      }}
    />
  );
};

export default Login;