import { Colors } from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Avatar } from "react-native-paper";

const IaMessageBookmark = ({ message }: any) => {
  return (
    <View style={styles.iaMessage}>
      <View style={styles.container}>
        <Avatar.Image
          source={require("../assets/images/logojpg.png")}
          size={32}
        />
        <Text style={styles.text}>{message}</Text>
      </View>
      <View style={styles.buttons}>
        <Pressable
          onPress={() => {
            console.log("LEER EN VOZ ALTA");
          }}
        >
          <MaterialCommunityIcons
            name="volume-high"
            size={24}
            color={Colors.light.textSecondary}
          ></MaterialCommunityIcons>
        </Pressable>

        <Pressable
          onPress={() => {
            console.log("Guardar");
          }}
        >
          <MaterialCommunityIcons
            name="bookmark"
            size={24}
            color={Colors.light.textSecondary}
          ></MaterialCommunityIcons>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iaMessage: {
    flexDirection: "column",
    margin: 10,
    marginBottom: 0,
    borderColor: Colors.light.primary,
    borderWidth: 2,
    borderRadius: 10,
  },
  container: {
    alignSelf: "flex-start",
    alignContent: "center",
    verticalAlign: "middle",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,

    padding: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  text: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
  },
  buttons: {
    gap: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 10,
  },
});

export default IaMessageBookmark;
