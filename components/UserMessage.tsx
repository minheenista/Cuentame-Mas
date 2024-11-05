import { Colors } from "@/constants/Colors";
import { View, Text, StyleSheet, useColorScheme } from "react-native";
import { Avatar } from "react-native-paper";

const UserMessage = ({ message }: any) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const activeColors = Colors[isDarkMode ? "dark" : "light"];

  return (
    <View style={styles(activeColors).container}>
      <Avatar.Text size={24} label="M" />
      <Text style={styles(activeColors).text}>{message}</Text>
    </View>
  );
};

const styles = (activeColors: any) =>
  StyleSheet.create({
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
      borderColor: activeColors.secondaryDark,
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      backgroundColor: activeColors.secondary,
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    text: {
      fontFamily: "Poppins-Regular",
      fontSize: 16,
    },
  });

export default UserMessage;
