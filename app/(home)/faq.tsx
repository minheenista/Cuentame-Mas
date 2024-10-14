import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  Pressable,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { router } from "expo-router";

export default function FaqScreen() {
  return (
    <View>
      <Text>FAQ SCREEN</Text>
      <Pressable onPress={() => router.navigate("/")}>
        <Text>HOME</Text>
      </Pressable>
      <Pressable onPress={() => router.navigate("faq")}>
        <Text>FAQ</Text>
      </Pressable>
      <Pressable onPress={() => router.navigate("tos")}>
        <Text>TOS</Text>
      </Pressable>
      <Pressable onPress={() => router.navigate("privacy")}>
        <Text>PRIVACY</Text>
      </Pressable>
      <Pressable onPress={() => router.navigate("login")}>
        <Text>LOGIN</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
