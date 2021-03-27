import React, { useState } from 'react';
import { StyleSheet, Dimensions, Text, View, FlatList, Image } from 'react-native';
import imgur from '../api/imgur';
import Heart from "react-animated-heart";


import pictures from '../constants/RandomImages';
const { width } = Dimensions.get('screen');

function Item({ item }) {
    const [isClick, setClick] = useState(false);

    return (
        <View style={styles.listItem}>
            <Image 
            source={{uri:item.link}}  
            style={{width:275 , height:275, borderRadius:5 , resizeMode:"cover", flex:"1"}}
                    />
            <View style={{alignItems:"center", display:'flex' }}>
                <Text style={{fontWeight:"bold"}}>{item.title}</Text>
                <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
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
  },
});