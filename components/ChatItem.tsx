import { Colors } from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  useColorScheme,
} from "react-native";
import { Menu, TextInput } from "react-native-paper";

const ChatItem = ({ chat, id }: { chat: any; id: any }) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const activeColors = Colors[isDarkMode ? "dark" : "light"];

  const [menuVisible, setMenuVisible] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [newChatName, setNewChatName] = useState(chat.title);

  const showMenu = () => setMenuVisible(true);
  const hideMenu = () => setMenuVisible(false);

  const handleEdit = () => {
    setIsEditing(true);
    hideMenu();
  };

  const handleSave = () => {
    // Aquí puedes realizar la acción de guardar el nuevo nombre del chat
    console.log("Nuevo nombre del chat:", newChatName);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setNewChatName(chat.title); // Revertir al nombre original si se cancela
  };

  const handleSelectChat = (chatId: any) => {
    console.log("Selected Chat ID:", chatId);
    // Navegar a la pantalla del chat con el ID correspondiente
  };

  return (
    <View style={styles(activeColors).chatItemContainer}>
      {/* Renderizar condicionalmente el Text o el TextInput */}
      {isEditing ? (
        <View style={styles(activeColors).chatItemEdit}>
          <TextInput
            style={{ width: "75%", height: 30 }}
            value={newChatName}
            activeOutlineColor={activeColors.secondaryDark}
            onChangeText={setNewChatName}
            mode="outlined"
          />
          <TouchableOpacity onPress={handleSave}>
            <MaterialCommunityIcons
              name="check"
              size={24}
              color={activeColors.success}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCancelEdit}>
            <MaterialCommunityIcons
              name="close"
              size={24}
              color={activeColors.danger}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles(activeColors).chatItem}>
          <View
            // onPress={() => handleSelectChat(id)}
            style={styles(activeColors).chatItem}
          >
            <Text style={styles(activeColors).chatName}>{chat.title}</Text>
          </View>
          <Menu
            visible={menuVisible}
            onDismiss={hideMenu}
            anchor={
              <TouchableOpacity onPress={showMenu}>
                <MaterialCommunityIcons
                  name="dots-vertical"
                  size={24}
                  color={activeColors.text}
                />
              </TouchableOpacity>
            }
          >
            <Menu.Item
              onPress={handleEdit}
              title="Editar Nombre"
              leadingIcon="pencil"
            />
            <Menu.Item
              onPress={() => {}}
              title="Eliminar Chat"
              leadingIcon="trash-can"
            />
          </Menu>
        </View>
      )}
    </View>
  );
};

const styles = (activeColors: any) =>
  StyleSheet.create({
    chatItemContainer: {
      flex: 1,
      flexGrow: 1,
      minWidth: 250,
      gap: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 12,
    },
    chatItem: {
      flex: 1,
      flexDirection: "row",
      marginEnd: 10,
    },
    chatItemEdit: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      gap: 5,
    },
    chatName: {
      fontFamily: "Poppins-Regular",
      fontSize: 16,
      color: activeColors.text,
      flex: 1,
    },
  });

export default ChatItem;
