import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const NoPictures = () => {

  return (
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
    </View>
  );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center"
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
});

export default NoPictures;