import React, { useState } from 'react';
import { StyleSheet, Dimensions, Text, View, FlatList, Image } from 'react-native';
import imgur from '../api/imgur';
import Heart from "react-animated-heart";


// import favorites from '../constants/FavoritesImages';
const { width } = Dimensions.get('screen');
var favorites = JSON.parse(localStorage.getItem('favorites'));

function Item({ item }) {

  const [isClick, setClick] = useState(false);
  let favorites = [];

  React.useEffect(() => {
    favorites = JSON.parse(localStorage.getItem('favorites'));
    if (favorites != null && favorites.some(favorite => favorite['id'] === item.id)) {
      setClick(true);
    }
  });

  function setFavorite() {
    setClick(!isClick);

    if (!isClick) {

      console.log("added a favorite");
      let fav = new Favorite(item.id, item.title, item.link);
      favorites.push(fav);
      localStorage.setItem('favorites', JSON.stringify(favorites))
    }

    if (isClick) {
      var itemToBeRemoved = item
      favorites.splice(favorites.findIndex(a => a.id === itemToBeRemoved.id), 1)
      localStorage.setItem('favorites', JSON.stringify(favorites))
    }
  }

  return (
    <View style={styles.listItem}>
      <Image
        source={{ uri: item.link }}
        style={{ width: 275, height: 275, borderRadius: 5, resizeMode: "cover", flex: "1", margin: "10px" }}
      />
      <View style={styles.row}>
        <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
      </View>
      <View style={styles.heart}>
        <Heart isClick={isClick} onClick={setFavorite} />
      </View>
    </View>

  );
}

export default class FavoritesScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {(this.item != null) ?
          <FlatList
            style={{ flex: 1 }}
            data={favorites}
            renderItem={({ item }) => <Item item={item} />}
            numColumns={1}
            keyExtractor={item => item.id}
          />
          :
          <View style={{ paddingTop: '50%' }}>
            <View style={styles.testEmpty}>
              <View style={styles.row}>
                <Text style={{ fontWeight: "bold", fontSize: 17 }}>Aucun favoris pour le moment..</Text>
              </View>
              <Image
                source={{ uri: 'https://media2.giphy.com/media/Y4z9olnoVl5QI/giphy.gif' }}
                style={{ width: 275, height: 275, borderRadius: 5, resizeMode: "cover", margin: "10px" }}
              />
            </View>
          </ View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  testEmpty: {
    margin: 5,
    padding: 5,
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
    alignItems: "center"
  },
  heart: {
    position: 'absolute',
    alignItems: 'flex-end',
    bottom: -39,
    right: -44,
  }
});