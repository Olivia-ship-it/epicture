import React, { useState, useEffect } from "react";
import {
  Animated,
  Dimensions,
  StyleSheet,
  View,
  ScrollView,
  Button,
  TouchableOpacity,
  Platform,
  Text,
} from "react-native";

import filters from '../constants/filters';
import ListItemButton from './ListItemButton';
import StickyItemButton from './StickyItemButton';
import pictures from '../constants/RandomImages';
import covid from '../constants/CovidImages';
import puppies from '../constants/PuppiesImages';
import ireland from '../constants/MemesImages';
import surf from '../constants/SurfImages';

const FILTERS_ICON_WIDTH = 44;
const FILTERS_BUTTON_WIDTH = 100;
const SCREEN_WIDTH = Dimensions.get("screen").width;

const Filter = (props) => {

  let [activeFilter, setActiveFilter] = useState("");
  let [activeImages, setActiveImages] = useState(pictures);

  const setParentActiveFilter = (filter) => {
    setActiveFilter(filter);
    console.log(filter);
  };

  useEffect(() => {
    switch (activeFilter) {
      case "PUPPIES":
        setActiveImages(puppies);
        props.setHomeScreenData(puppies);
        break;
      case "COVID":
        setActiveImages(covid);
        props.setHomeScreenData(covid);
        break;
      case "IRELAND":
        setActiveImages(ireland);
        props.setHomeScreenData(ireland);
        break;
      case "SURF":
        setActiveImages(surf);
        props.setHomeScreenData(surf);
        break;
    }
    console.log("GOT HERE", activeFilter);
  }, [activeFilter]);

  const animatedWidth = new Animated.Value(FILTERS_BUTTON_WIDTH);

  const scrollViewPaddingLeft = FILTERS_BUTTON_WIDTH - 18;

  const scrollViewRef = React.createRef();

  const onFiltersScroll = (event) => {
    const eventX = event.nativeEvent.contentOffset.x;
    const direction = eventX > 0 ? 1 : -1;

    const offsetX = Math.min(
      Math.abs(eventX),
      FILTERS_BUTTON_WIDTH - FILTERS_ICON_WIDTH
    );

    animatedWidth.setValue(FILTERS_BUTTON_WIDTH - offsetX * direction);
  };

  const onScrollEndSnapToEdge = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const maxOffset = FILTERS_BUTTON_WIDTH - FILTERS_ICON_WIDTH;
    const velocityFactor = Math.abs(event.nativeEvent.velocity.x * 30);

    if (offsetX > 0 && offsetX < maxOffset / 2 - velocityFactor) {
      scrollViewRef.scrollTo({ x: 0 });
    } else if (
      maxOffset / 2 + velocityFactor <= offsetX &&
      offsetX < maxOffset
    ) {
      scrollViewRef.scrollTo({
        x: FILTERS_BUTTON_WIDTH
      });
    }
  };


  return (
    <View style={styles.container}>

      <View style={styles.stickyItem}>
        <Animated.View
          style={[
            styles.stickyItemMask,
            { width: animatedWidth, maxWidth: FILTERS_BUTTON_WIDTH }
          ]}
        >

          <TouchableOpacity
            style={styles.button}
          >
            <View style={styles.containerStyle}>
              <View style={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24"><path fill="white" fillRule="evenodd" d="M6.1 17.25a3 3 0 0 1 5.8 0h8.85a.75.75 0 1 1 0 1.5h-8.84a3 3 0 0 1-5.82 0H3.25a.75.75 0 1 1 0-1.5h2.84zm6-6a3 3 0 0 1 5.8 0h2.85a.75.75 0 1 1 0 1.5h-2.84a3 3 0 0 1-5.82 0H3.25a.75.75 0 1 1 0-1.5h8.84zm-6-6a3 3 0 0 1 5.8 0h8.85a.75.75 0 1 1 0 1.5h-8.84a3 3 0 0 1-5.82 0H3.25a.75.75 0 0 1 0-1.5h2.84zM9 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm6 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-6 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path></svg>
              </View>
              <Text style={{ fontFamily: 'Calibri', color: 'white', fontSize: 18, fontWeight: 'bold', marginLeft: 8 }}>Filters</Text>
            </View>

          </TouchableOpacity>
        </Animated.View>
      </View>

      <ScrollView
        horizontal
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsHorizontalScrollIndicator={false}
        onScroll={onFiltersScroll}
        onScrollEndDrag={onScrollEndSnapToEdge}
        scrollEventThrottle={16}
        ref={scrollViewRef}
      >
        {filters.map(filter => (
          <ListItemButton
            key={filter.name}
            text={filter.label}
            setParentFilter={setParentActiveFilter}
          />
        ))}
      </ScrollView>
    </View>
  );
};








































const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingLeft: 10,
  },
  stickyItem: {
    position: "absolute",
    zIndex: 1,
    left: 10,
    paddingRight: 8,
  },
  stickyItemMask: {
    minWidth: FILTERS_ICON_WIDTH,
    marginLeft: -8,
    borderRadius: 8,
    overflow: "hidden"
  },
  scrollView: {
    marginLeft: 10
  },
  scrollViewContent: {
    paddingLeft: 100,
    paddingRight: 10,
    paddingBottom: 13
  },
  icon: {
    marginLeft: -6,
    marginRight: 5
  },
  button: {
    marginLeft: 8,
    borderRadius: 8,
    backgroundColor: "#F4A18E"
  },
  containerStyle: {
    flexDirection: "row",
    alignItems: "center",
    height: 32,
    paddingHorizontal: 12
  },
  textStyle: {
    fontSize: 13,
    fontWeight: 'bold',
  },
});

export default Filter;