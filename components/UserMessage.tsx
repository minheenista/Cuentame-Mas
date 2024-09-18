import { Colors } from "@/constants/Colors";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";

const UserMessage = ({ message }: any) => {
  return (
    <View style={styles.container}>
      <Avatar.Text size={24} label="M" />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginBottom: 0,
    alignSelf: "flex-end",
    width: "90%",
    alignContent: "center",
    verticalAlign: "middle",
    flexDirection: "row-reverse",
    alignItems: "flex-end",
    gap: 10,
    borderColor: Colors.light.secondaryDark,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: Colors.light.secondary,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  text: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
  },
});

export default UserMessage;
