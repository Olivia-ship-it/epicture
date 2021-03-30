import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Image, Button, ImageBackground, Text, Linking, TouchableOpacity } from 'react-native';
import { ListItem, Icon, Card } from 'react-native-elements'
import Login from '../components/Login';
import ImgurAuth from '../components/ImgurAuth';

import image from '../../assets/halfbackground.png';
import axios from "axios";

const LoginScreen = () => {
    const [shouldLogin, setShouldLogin] = useState(true);
    const [userName, setUserName] = useState('');

    const queryString = window.location.href.substring(24);
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);

    // useEffect(() => {
    //     if(urlParams.get('access_token')){
    //         // console.log(urlParams.get('access_token'));
    //         setShouldLogin(false);
    //         axios({
    //             method: 'get',
    //             url: 'https://api.spotify.com/v1/me',
    //             headers: {
    //                 Authorization: 'Bearer ' + urlParams.get('access_token'),
    //             }
    //         }).then((res) => {
    //             console.log(res)
    //             setUserName(res.data.display_name)
    //         })
    //     }
    // },[])
    let insideRender;

    if(shouldLogin){
        insideRender = <Card style={{ borderRadius: 20 }}>
            <Card.Title style={styles.titleStyle}>Login with Imgur</Card.Title>
            <Text style={styles.textStyle}>
                In order to take full advantage of our app, you need to login with your Imgur account.
            </Text>
            <ImgurAuth />
            <Text style={{ margin: 10, textAlign: 'center' }}>OR</Text>
            <Login setShouldLogin={setShouldLogin} setUserName={setUserName}/>
            <Card.Divider />
            <Text style={styles.smallText}>If you do not have an Imgur account yet, register <Text style={{ color: 'blue' }}
                                                                                                   onPress={() => Linking.openURL('https://imgur.com/register?redirect=https%3A%2F%2Fimgur.com%2F')}>
                here
            </Text>.
            </Text>
        </Card>
    }

    else{
        return ( 
          <Card style={{ borderRadius: 20 }}>
          <Card.Title style={styles.titleStyle}>Welcome {userName}</Card.Title>

          <Card.Divider />

                  <Image
                      source={{ uri: 'https://media.giphy.com/media/l4JyOCNEfXvVYEqB2/giphy.gif' }}
                      style={{ width: 290, height: 290, borderRadius: 5, resizeMode: "cover", margin: "10px" }}
                  />
              <Text style={styles.happyText}>We are happy to see you again ! </Text>
            </Card>
        );
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
    containerTest: {
      flex: 1,
      marginTop: 0,
    },
    containerMain: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 73,
    },
    testEmpty: {
      margin: 5,
      padding: 5,
      marginTop: -90,
      backgroundColor: "white",
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
      width: "80%",
      alignSelf: "center",
      borderRadius: 5,
    },
    row: {
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center"
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
    happyText:{
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: "center",
      flex: 1,
      fontWeight: 'bold',
      fontSize: 16,
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
