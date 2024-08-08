// RightDrawer.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const { width } = Dimensions.get("window");
const drawerWidth = 250;

const RightDrawer = ({
  isVisible,
  toggleDrawer,
}: {
  isVisible: boolean;
  toggleDrawer: () => void;
}) => {
  const animatedValue = new Animated.Value(isVisible ? 0 : drawerWidth);

  Animated.timing(animatedValue, {
    toValue: isVisible ? 0 : drawerWidth,
    duration: 3000,
    useNativeDriver: true,
  }).start();

  return (
    <Animated.View
      style={[styles.drawer, { transform: [{ translateX: animatedValue }] }]}
    >
      {/* <TouchableOpacity onPress={toggleDrawer}>
        <Text style={styles.closeButton}>Close Right Drawer</Text>
      </TouchableOpacity> */}
      <Text>Right Drawer Content</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  drawer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    width: drawerWidth,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    padding: 20,
    zIndex: 1000,
  },
  closeButton: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default RightDrawer;
