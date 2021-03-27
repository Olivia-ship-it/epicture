import React from 'react'
import { StyleSheet, Dimensions, ScrollView, View } from 'react-native';
import Filter from '../components/Filter';


import ImageGrid from '../components/ImageGrid';
import Search from '../components/SearchBar';

const { width } = Dimensions.get('screen');
import images from '../constants/images';

export default class Home extends React.Component {



    render() {
        return (
              <View style={{ flex: 1 }}>
                <Search />
                <Filter />
                <ImageGrid />
              </View>

        );
    }
}

// const styles = StyleSheet.create({
//     home: {
//       width: width,    
//     },
//     search: {
//       height: 48,
//       width: width - 32,
//       marginHorizontal: 16,
//       borderWidth: 1,
//       borderRadius: 3,
//     },
//     header: {
//       backgroundColor: theme.COLORS.WHITE,
//       shadowColor: theme.COLORS.BLACK,
//       shadowOffset: {
//         width: 0,
//         height: 2
//       },
//       shadowRadius: 8,
//       shadowOpacity: 0.2,
//       elevation: 4,
//       zIndex: 2,
//     },
//     tabs: {
//       marginBottom: 24,
//       marginTop: 10,
//       elevation: 4,
//     },
//     tab: {
//       backgroundColor: theme.COLORS.TRANSPARENT,
//       width: width * 0.50,
//       borderRadius: 0,
//       borderWidth: 0,
//       height: 24,
//       elevation: 0,
//     },
//     tabTitle: {
//       lineHeight: 19,
//       fontWeight: '300'
//     },
//     divider: {
//       borderRightWidth: 0.3,
//       borderRightColor: theme.COLORS.MUTED,
//     },
//     images: {
//       width: width - theme.SIZES.BASE * 2,
//       paddingVertical: theme.SIZES.BASE * 2,
//     },
//   });