import React, { useState, useEffect } from 'react'
import { StyleSheet, Dimensions, ScrollView, View, TextInput } from 'react-native';
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
  let [search, setSearch] = useState('');

  const filteredData = (data) => {
    setValue(data);
  }

  const updateSearch = (search) => {
    setSearch(search);

    let filtered = pictures.filter(picture => {
      return picture['title'].toLowerCase().includes(search.toLowerCase())
    });

    setValue(filtered);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.input_container}>
        <TextInput
          style={styles.input}
          placeholder="Type here..."
          keyboardType="default"
          underlineColorAndroid="transparent"
          onChangeText={updateSearch}
          value={search}
        />
      </View>
      <Filter setHomeScreenData={filteredData} />
      <ImageGrid pictures={value} />
    </View>
  );
}

const styles = StyleSheet.create({
  input_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1,
  },
  searchIcon: {
    marginRight: 50
  },
  input: {
    flex: 1,
    height: 40,
    margin: 12,
    padding: 15,
    borderWidth: 0,
    borderRadius: 30,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});