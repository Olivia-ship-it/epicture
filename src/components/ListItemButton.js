import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Platform
} from "react-native";


const Touchable = Platform.select({
  web: ({ ...props }) => (
    <TouchableHighlight underlayColor="#6284d7" {...props} />
  ),
  default: TouchableOpacity
});

const ListItemButton = ({ onPress, text, icon }) => {
  const containerStyle = [styles.container];
  const textStyle = [styles.text];

//   if (active) {
//     containerStyle.push(styles.containerActive);
//     textStyle.push(styles.textActive);
//   }

  return (
    <Touchable
      style={styles.button}
      onPress={() => { alert("hey") }}
    >
      <View style={containerStyle}>
      {icon && icon}
        <Text numberOfLines={1} ellipsizeMode="clip" style={textStyle}>
          {text}
        </Text>
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  button: {
    marginLeft: 8,
    borderRadius: 8,
    backgroundColor: "#F4A18E"
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 32,
    paddingHorizontal: 12
  },
  containerActive: {
    backgroundColor: "#FFFFFF"
  },
  text: {
    fontSize: 13,
    fontWeight: "250",
    lineHeight: 18,
    color: "#FFFFFF",
    textAlign: 'center', 
    fontWeight: 'bold',
    ...Platform.select({ web: { textOverflow: "clip" }, default: {} })
  },
  textActive: {
    color: "#2252C7"
  }
});

export default ListItemButton;