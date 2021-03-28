import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, Text, View, FlatList, Image } from 'react-native';
import imgur from '../api/imgur';
import Heart from "react-animated-heart";


import pictures from '../constants/RandomImages';
import Favorite from '../constants/FavoritesImages';
const { width } = Dimensions.get('screen');
let favs = [];

function Item({ item }) {
    const [isClick, setClick] = useState(false);
    
    React.useEffect(() => {
        var favorites = JSON.parse(localStorage.getItem('favorites'));
        if (favorites.some( favorite => favorite['id'] === item.id)){
            setClick(true);
        } 
    });

    function setFavorite() {
        setClick(!isClick);
        var itemId = item.id;
        
        if (!isClick) {
            console.log("added a favorite");
            let fav = new Favorite(item.id, item.title, item.link);
            favs.push(fav);
            console.log(favs); 
        }

        if (isClick) {
            var itemToBeRemoved = item
            favs.splice(favs.findIndex(a => a.id === itemToBeRemoved.id) , 1)
            console.log(favs)
        }

        localStorage.setItem('favorites', JSON.stringify(favs));
    }

    return (
        <View style={styles.listItem}>
            <Image 
            source={{uri:item.link}}  
            style={{width:275 , height:275, borderRadius:5 , resizeMode:"cover", flex:"1", margin: "10px"}}
            />
            <View style={styles.row}>
                <Text style={{fontWeight:"bold"}}>{item.title}</Text>
            </View>
            <View style={styles.heart}>
            <Heart isClick={isClick} onClick={setFavorite} />
            </View>
        </View>
        
    );
}

export default class ImageGrid extends React.Component {


    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style={{ flex: 1 }}
                    data={pictures}
                    renderItem={({ item }) => <Item item={item} />}
                    numColumns={1}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0,
    },
    listItem: {
        margin: 5,
        padding: 5,
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
        alignItems:"center"
    },
    heart: {
        position: 'absolute',
        alignItems: 'flex-end',
        bottom: -39,
        right: -44,
    }
});