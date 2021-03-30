import React, { Component } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
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
    <View style={styles.buttonContainer}>
    <TouchableOpacity
      disabled={!request}
      onPress={() => {
          login();
      }}
      style={styles.button}>
      <Text style={styles.buttonText}> {'Authenticate with Imgur'.toUpperCase()}</Text>
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
    padding: 8,
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