import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const SearchBar = () => {

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        keyboardType="default"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
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