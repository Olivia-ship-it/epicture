import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class Favorites extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Favorites screen</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go to Favorites"
          onPress={() => this.props.navigation.navigate('Favorites')}
        />
      </View>
    );
  }
}

export default Favorites;