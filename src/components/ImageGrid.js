import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import imgur from '../api/imgur';

function Item({ item }) {
    return (
        <View style={styles.listItem}>
        <Image source={{uri:item.photo}}  style={{width:160, height:160,borderRadius:5}} />
        <View style={{alignItems:"center"}}>
            <Text style={{fontWeight:"bold"}}>{item.name}</Text>
        {/* <TouchableOpacity style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}>
            <MaterialCommunityIcons name="heart" color="#2a9d8f" size={26} />
        </TouchableOpacity> */}
        </View>
        </View>
    );
}

export default class ImageGrid extends React.Component {


    componentDidMount() {
        const response = imgur.get('https://api.imgur.com/3/gallery/random/random/1');
        console.log(response);
    }


    state = {
        data:[
            {
                "name": "Miyah Myles",
                "photo": "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6"
            },
            {
                "name": "June Cha",
                "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/44.jpg"
            },
            {
                "name": "Iida Niskanen",
                "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/68.jpg"
            },
            {
                "name": "Renee Sims",
                "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/65.jpg"
            },
        ]
    }

    render(){
        return (
        <View style={styles.container}>
            <FlatList
            style={{flex:1}}
            data={this.state.data}
            renderItem={({ item }) => <Item item={item}/>}
            numColumns={2}
            keyExtractor={item => item.name}
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
    borderRadius:5
  }
});