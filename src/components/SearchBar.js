import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchBar = () => {

  return (
    <SafeAreaView style={styles.input_container}>
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        keyboardType="default"
        underlineColorAndroid="transparent"
      />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
    </SafeAreaView>
  );
};

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

export default SearchBar;