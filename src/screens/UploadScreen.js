import React, { useState, useEffect } from 'react';
import {Button, Image, View, Platform, TouchableOpacity, Text, FlatList, StyleSheet, Linking} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {Card} from "react-native-elements";
import Login from "../components/Login";

function Item( props ) {
    const [isClick, setClick] = useState(false);
    let favorites = [];
    let itemSource;

    const renderImage = () => {
        return (
            <Image
                source={{uri: props.item}}
                style={{width: 200, height: 200, borderRadius: 5, resizeMode: "cover", flex: "1", margin: "10px"}}
            />
        )
    }

    return (
        <View style={styles.listItem}>
            {renderImage()}
        </View>

    );

}

const UploadScreen = () => {

    const [image, setImage] = useState(null);

    useEffect(() => {
      (async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      })();
    }, []);

    const resetUploads = () => {
        localStorage.setItem('uploadedImages', JSON.stringify([]))
    }

    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      console.log(result);

      if (!result.cancelled) {
          let currentImages = JSON.parse(localStorage.getItem('uploadedImages'));
          currentImages.push(result.uri);
          localStorage.setItem('uploadedImages', JSON.stringify(currentImages))
          console.log(JSON.stringify(currentImages))
        setImage(result.uri);
      }
    };

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Card style={{ borderRadius: 20 }}>
              <Card.Title style={styles.titleStyle}>Upload a picture to your Imgur account</Card.Title>
              <View style = {styles.buttonContainer}>
              <TouchableOpacity
                  style = {styles.button}
                  onPress={pickImage}
              >
                  <Text style={styles.buttonText}> {'Upload'.toUpperCase()}</Text>
              </TouchableOpacity>
              </View>
              <Card.Divider />
              {!(JSON.parse(localStorage.getItem('uploadedImages')) != "") ?
                  <div>
                      <Text style={styles.smallText}>You have not uploaded any pictures yet !
                      </Text>
                      <Image
                          source={{ uri: 'https://media2.giphy.com/media/Y4z9olnoVl5QI/giphy.gif' }}
                          style={{ width: 330, height: 330, borderRadius: 5, resizeMode: "cover", margin: "10px" }}
                      />
                  </div>
                  : <div>
                  <Text style={styles.smallText}>Tired of all your pics ? Reset them all !
              </Text>
                  <View style = {styles.buttonContainer}>
                      <TouchableOpacity
                          style = {styles.button}
                          onPress={resetUploads}
                      >
                          <Text style={styles.buttonText}> {'Reset Uploads'.toUpperCase()}</Text>
                      </TouchableOpacity>
                  </View></div>
              }
          </Card>
          <FlatList
              style={{ flex: 1 }}
              data={JSON.parse(localStorage.getItem('uploadedImages'))}
              renderItem={({ item }) => <Item item={ item }  />}
              numColumns={1}
              keyExtractor={item => item.id}
          />
      </View>


    );
  }

  export default UploadScreen;

const styles = StyleSheet.create({
    listItem: {
        margin: 5,
        padding: 30,
        backgroundColor: "white",
        width: "80%",
        flex: 1,
        alignSelf: "center",
        borderRadius: 5,
        display: 'flex',
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
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center"
    },
    heart: {
        position: 'absolute',
        alignItems: 'flex-end',
        bottom: -39,
        right: -44,
    },
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
    buttonContainer: {
        width: '100%',
        justifyContent: 'center',
        display: 'flex',
    },
    button: {
        backgroundColor: '#0DA66F',
        padding: 3,
        borderRadius: 30,
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
