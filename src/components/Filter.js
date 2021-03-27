import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Button} from "react-native";

const Filter = () => {

  return (
    <View style={[styles.tabs, {flexDirection: "row" }]}>
    <Button onPress={() => console.log("favorites")}>
        <View style={[{flexDirection: "row" }]}>
        {/* <Icon name="grid" family="feather" style={{ paddingRight: 8 }} /> */}
        <Text size={16} >Categories</Text>
        </View>
    </Button>
    <Button onPress={() => console.log("uploaded pics")}>
        <View style={[{flexDirection: "row" }]}>
        {/* <Icon size={16} name="camera-18" family="GalioExtra" style={{ paddingRight: 8 }} /> */}
        <Text size={16} >Best Deals</Text>
        </View>
    </Button>
    </View>
  );
};

const styles = StyleSheet.create({
    tabs: {
      marginBottom: 24,
      marginTop: 10,
      elevation: 4,
    },
  });
  
export default Filter;