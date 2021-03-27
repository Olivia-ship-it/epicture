// import React from 'react';
// import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
// import { Block, Text, theme } from 'galio-framework';

// // import materialTheme from '../constants/Theme';

// const { width } = Dimensions.get('screen');

// class Images extends React.Component {
//   render() {
//     const { navigation, image, horizontal, full, style, priceColor, imageStyle } = this.props;
//     const imageStyles = [styles.image, full ? styles.fullImage : styles.horizontalImage, imageStyle];

//     return (
//       <Block row={horizontal} card flex style={[styles.image, styles.shadow, style]}>
//         <TouchableWithoutFeedback >
//           <Block flex style={[styles.imageContainer, styles.shadow]}>
//             <Image source={{ uri: image.image }} style={imageStyles} />
//           </Block>
//         </TouchableWithoutFeedback>
//         <TouchableWithoutFeedback >
//           <Block flex space="between" style={styles.imageDescription}>
//             <Text size={14} style={styles.imageTitle}>{image.title}</Text>
//             <Text size={12} muted={!priceColor} color={priceColor}>${image.price}</Text>
//           </Block>
//         </TouchableWithoutFeedback>
//       </Block>
//     );
//   }
// }

// export default Images;

// const styles = StyleSheet.create({
//   image: {
//     backgroundColor: theme.COLORS.WHITE,
//     marginVertical: theme.SIZES.BASE,
//     borderWidth: 0,
//     minHeight: 114,
//   },
//   imageTitle: {
//     flex: 1,
//     flexWrap: 'wrap',
//     paddingBottom: 6,
//   },
//   imageDescription: {
//     padding: theme.SIZES.BASE / 2,
//   },
//   imageContainer: {
//     elevation: 1,
//   },
//   image: {
//     borderRadius: 3,
//     marginHorizontal: theme.SIZES.BASE / 2,
//     marginTop: -16,
//   },
//   horizontalImage: {
//     height: 122,
//     width: 'auto',
//   },
//   fullImage: {
//     height: 215,
//     width: width - theme.SIZES.BASE * 3,
//   },
//   shadow: {
//     shadowColor: theme.COLORS.BLACK,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 4,
//     shadowOpacity: 0.1,
//     elevation: 2,
//   },
// });