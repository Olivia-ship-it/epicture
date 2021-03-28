import React from 'react'
import { StyleSheet, Dimensions, ScrollView, View } from 'react-native';
import Filter from '../components/Filter';


import ImageGrid from '../components/ImageGrid';
import Search from '../components/SearchBar';

const { width } = Dimensions.get('screen');

export default class Home extends React.Component {



    render() {
        return (
              <View style={{ flex: 1 }}>
                <Search />
                <Filter />
                <ImageGrid />
              </View>

        );
    }
}
