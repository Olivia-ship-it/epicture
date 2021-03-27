import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import FavoritesGrid from '../components/FavoritesGrid';

class Favorites extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <FavoritesGrid />
      </View>
    );
  }
}

export default Favorites;