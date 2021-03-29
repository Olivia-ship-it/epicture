import React, { useState, useEffect } from 'react'
import { StyleSheet, Dimensions, ScrollView, View } from 'react-native';
import Filter from '../components/Filter';


import ImageGrid from '../components/ImageGrid';
import Search from '../components/SearchBar';
import pictures from '../constants/RandomImages';
import puppies from '../constants/PuppiesImages';
import covid from '../constants/CovidImages';
import surf from '../constants/SurfImages';
import memes from '../constants/MemesImages';

const { width } = Dimensions.get('screen');

export default function Home(props) {

    let [value, setValue] = useState(pictures);

    const filteredData = (data) => {
      setValue(data);
    }

    return (
          <View style={{ flex: 1 }}>
            <Search />
            <Filter setHomeScreenData={filteredData} />
            <ImageGrid pictures={value} />
          </View>
    );

}
