import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";


import ListItemButton from "./ListItemButton";


const Icon = () => (
  <View style={styles.icon}>
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24"><path fill="white" fill-rule="evenodd" d="M6.1 17.25a3 3 0 0 1 5.8 0h8.85a.75.75 0 1 1 0 1.5h-8.84a3 3 0 0 1-5.82 0H3.25a.75.75 0 1 1 0-1.5h2.84zm6-6a3 3 0 0 1 5.8 0h2.85a.75.75 0 1 1 0 1.5h-2.84a3 3 0 0 1-5.82 0H3.25a.75.75 0 1 1 0-1.5h8.84zm-6-6a3 3 0 0 1 5.8 0h8.85a.75.75 0 1 1 0 1.5h-8.84a3 3 0 0 1-5.82 0H3.25a.75.75 0 0 1 0-1.5h2.84zM9 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm6 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-6 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path></svg>
  </View>
);

const StickyItemButton = () => (
  <ListItemButton
    text="Filters"
    icon={ <Icon /> }
  />
);

const styles = StyleSheet.create({
  counter: {
    justifyContent: "center",
    alignItems: "center",
    width: 20,
    height: 20,
    marginLeft: -4,
    marginRight: 7,
    borderRadius: 4,
    backgroundColor: "#FFFFFF"
  },
  counterText: {
    fontSize: 13,
    fontWeight: "500",
    lineHeight: 15,
    color: "#0e54ff"
  },
  icon: {
    marginLeft: -6,
    marginRight: 5
  }
});

export default StickyItemButton;