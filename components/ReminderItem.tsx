import { Colors } from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text, StyleSheet, Pressable } from "react-native";

export const ReminderItem = ({
  id,
  title,
  date,
}: {
  id: any;
  title: any;
  date: any;
}) => (
  <View style={styles.reminderItem}>
    <Text style={styles.body}>{title}</Text>
    <Text style={[styles.body, styles.grayText]}>{date}</Text>
    <Pressable>
      <MaterialCommunityIcons
        name="pencil"
        size={24}
        color={Colors.light.warning}
      />
    </Pressable>
    <Pressable>
      <MaterialCommunityIcons
        name="delete"
        size={24}
        color={Colors.light.danger}
      />
    </Pressable>
  </View>
);

export default ReminderItem;

const styles = StyleSheet.create({
  reminderItem: {
    flexDirection: "row",

    justifyContent: "space-between",
    padding: 10,
    margin: 10,
  },
  body: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
  },
  grayText: {
    color: Colors.light.textHint,
  },
});
