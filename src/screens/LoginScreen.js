import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Image, Button, ImageBackground, Text, Linking, TouchableOpacity } from 'react-native';
import { ListItem, Icon, Card } from 'react-native-elements'
import Login from '../components/Login';

import image from '../../assets/halfbackground.png';
import axios from "axios";

const LoginScreen = () => {
    const [shouldLogin, setShouldLogin] = useState(true);
    const [userName, setUserName] = useState('');

    const queryString = window.location.href.substring(24);
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);

    useEffect(() => {
        if(urlParams.get('access_token')){
            // console.log(urlParams.get('access_token'));
            setShouldLogin(false);
            axios({
                method: 'get',
                url: 'https://api.spotify.com/v1/me',
                headers: {
                    Authorization: 'Bearer ' + urlParams.get('access_token'),
                }
            }).then((res) => {
                console.log(res)
                setUserName(res.data.display_name)
            })
            }

    },[])
    let insideRender;

    if(shouldLogin){
        insideRender = <Card style={{ borderRadius: 20 }}>
            <Card.Title style={styles.titleStyle}>Login with Imgur</Card.Title>
            <Text style={styles.textStyle}>
                In order to take full advantage of our app, you need to login with your Imgur account.
            </Text>
            <Login />
            {/*<Text style={{ margin: 10, textAlign: 'center' }}>OR</Text>*/}
            {/*<View style={styles.buttonContainer}>*/}
            {/*<TouchableOpacity*/}
            {/*  onPress={() => {*/}
            {/*      alert("login");*/}
            {/*  }}*/}
            {/*  style={styles.button}>*/}
            {/*  <Text style={styles.buttonText}> {'Login with Spotify'.toUpperCase()}</Text>*/}
            {/*</TouchableOpacity>    */}
            {/*</View>  */}
            <Card.Divider />
            <Text style={styles.smallText}>If you do not have an Imgur account yet, register <Text style={{ color: 'blue' }}
                                                                                                   onPress={() => Linking.openURL('https://imgur.com/register?redirect=https%3A%2F%2Fimgur.com%2F')}>
                here
            </Text>.
            </Text>
        </Card>
    }

    else{
        insideRender = <Card style={{ borderRadius: 20 }}>
            <Text style={styles.textStyle}>
                Welcome {userName}
            </Text>
        </Card>
    }


    return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.containerMain}>
            {insideRender}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
       },
    containerMain: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 73,
    },
    textStyle: {
      justifyContent: 'center',
      fontSize: 15,
      margin: 10,
    },
    titleStyle: {
      fontSize: 20
    },
    image: {
      flex: 1,
      width: 'auto',
      height: '50%',
      justifyContent: "center"
    },
    smallText: {
      margin: 10,
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

export default LoginScreen;
