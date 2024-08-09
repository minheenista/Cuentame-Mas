// LeftDrawer.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  TouchableOpacity,
  Button,
} from "react-native";

const { width } = Dimensions.get("window");
const drawerWidth = 250;

const LeftDrawer = ({ isVisible, toggleDrawer, navigation }) => {
  const animatedValue = new Animated.Value(isVisible ? 0 : -drawerWidth);

  Animated.timing(animatedValue, {
    toValue: isVisible ? 0 : -drawerWidth,
    duration: 300,
    useNativeDriver: true,
  }).start();

  return (
    <Animated.View
      style={[styles.drawer, { transform: [{ translateX: animatedValue }] }]}
    >
      <TouchableOpacity onPress={toggleDrawer}>
        <Text style={styles.closeButton}>Close Left Drawer</Text>
      </TouchableOpacity>
      <Text>Left Drawer Content</Text>
      <Button
        title="Go to Explore"
        onPress={() => {
          toggleDrawer(); // Close the drawer
          navigation.navigate("Explore"); // Navigate to Explore screen
        }}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  drawer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    zIndex: 1000,
    width: drawerWidth,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    padding: 20,
  },
  closeButton: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default LeftDrawer;
