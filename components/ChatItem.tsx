import { Colors } from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { Menu, TextInput } from "react-native-paper";

const ChatItem = ({ chat, onSelectChat }: { chat: any; onSelectChat: any }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [newChatName, setNewChatName] = useState(chat.name);

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
    setNewChatName(chat.name); // Revertir al nombre original si se cancela
  };

  return (
    <View style={styles.chatItemContainer}>
      {/* Renderizar condicionalmente el Text o el TextInput */}
      {isEditing ? (
        <View style={styles.chatItemEdit}>
          <TextInput
            style={{ width: "70%", height: 30 }}
            value={newChatName}
            activeOutlineColor={Colors.light.secondaryDark}
            onChangeText={setNewChatName}
            mode="outlined"
          />
          <TouchableOpacity onPress={handleSave}>
            <MaterialCommunityIcons name="check" size={24} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCancelEdit}>
            <MaterialCommunityIcons name="close" size={24} />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.chatItem}>
          <TouchableOpacity
            onPress={() => onSelectChat(chat.id)}
            style={styles.chatItem}
          >
            <Text style={styles.chatName}>{chat.name}</Text>
          </TouchableOpacity>
          <Menu
            visible={menuVisible}
            onDismiss={hideMenu}
            anchor={
              <TouchableOpacity onPress={showMenu}>
                <MaterialCommunityIcons name="dots-vertical" size={24} />
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

const styles = StyleSheet.create({
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
    color: Colors.light.text,
    flex: 1,
  },
});

export default ChatItem;
