import { Colors } from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  useColorScheme,
} from "react-native";

export const ReminderItem = ({
  id,
  title,
  date,
}: {
  id: any;
  title: any;
  date: any;
}) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const activeColors = Colors[isDarkMode ? "dark" : "light"];

  return (
    <View style={styles(activeColors).reminderItem}>
      <Text style={styles(activeColors).body}>{title}</Text>
      <Text style={[styles(activeColors).body, styles(activeColors).grayText]}>
        {date}
      </Text>
      <Pressable>
        <MaterialCommunityIcons
          name="pencil"
          size={24}
          color={activeColors.warning}
        />
      </Pressable>
      <Pressable>
        <MaterialCommunityIcons
          name="delete"
          size={24}
          color={activeColors.danger}
        />
      </Pressable>
    </View>
  );
};

export default ReminderItem;

const styles = (activeColors: any) =>
  StyleSheet.create({
    reminderItem: {
      flexDirection: "row",

      justifyContent: "space-between",
      padding: 10,
      margin: 10,
    },
    body: {
      fontFamily: "Poppins-Regular",
      fontSize: 16,
      color: activeColors.text,
    },
    grayText: {
      color: activeColors.textHint,
    },
  });
