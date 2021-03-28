import React from "react";
import {
  Animated,
  Dimensions,
  StyleSheet,
  View,
  ScrollView,
  Button
} from "react-native";

import filters from '../constants/filters';
import ListItemButton from './ListItemButton';
import StickyItemButton from './StickyItemButton';

const FILTERS_ICON_WIDTH = 44;
const FILTERS_BUTTON_WIDTH = 100;
const SCREEN_WIDTH = Dimensions.get("screen").width;

const Filter = () => {

  const animatedWidth = new Animated.Value(FILTERS_BUTTON_WIDTH);

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
        <StickyItemButton />
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
          // active={activeFiltersMap[filter.name]}
          text={filter.label}
          // icon={
          //   filter.type === "MULTI_CHOICE" && (
          //     <DropDownIcon active={!!activeFiltersMap[filter.name]} />
          //   )
          // }
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
});
  
export default Filter;