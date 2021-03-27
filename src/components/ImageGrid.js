import React from 'react';
import { StyleSheet, Dimensions, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import imgur from '../api/imgur';


import pictures from '../constants/RandomImages';
const { width } = Dimensions.get('screen');

function Item({ item }) {
    return (
        <View style={styles.listItem}>
            <Image 
            source={{uri:item.link}}  
            style={{width:275 , height:275, borderRadius:5 , resizeMode:"cover", flex:"1"}}
                    />
            <View style={{alignItems:"center"}}>
                <Text style={{fontWeight:"bold"}}>{item.title}</Text>
            {/* <TouchableOpacity style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}>
                <MaterialCommunityIcons name="heart" color="#2a9d8f" size={26} />
            </TouchableOpacity> */}
            </View>
        </View>
    );
}

export default class ImageGrid extends React.Component {


    render(){
        return (
        <View style={styles.container}>
            <FlatList
            style={{flex:1}}
            data={pictures}
            renderItem={({ item }) => <Item item={item}/>}
            numColumns={1}
            keyExtractor={item => item.id}
            />
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop:60,
  },
  listItem:{
    margin:5,
    padding:5,
    backgroundColor:"#FFF",
    width:"80%",
    flex:1,
    alignSelf:"center",
    borderRadius:5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
});