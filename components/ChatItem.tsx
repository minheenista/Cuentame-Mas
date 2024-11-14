import { Colors } from "@/constants/Colors";
import { gql, useMutation, useQuery } from "@apollo/client";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  useColorScheme,
  Pressable,
} from "react-native";
import Modal from "react-native-modal";
import { Menu, TextInput } from "react-native-paper";

const ME = gql`
  query Me {
    me {
      _id
      name
      lastname
      email
      regimenFiscal
      password
      createdAt
      updatedAt
      reminders {
        _id
        userId
        title
        description
        finishDate
        createdAt
        updatedAt
      }
      chats {
        _id
        userId
        iamodelId
        title
        createdAt
        updatedAt
      }
    }
  }
`;

const EDIT_CHAT = gql`
  mutation UpdateChat($input: UpdateChatInput!) {
    updateChat(input: $input) {
      _id
      userId
      iamodelId
      title
      createdAt
      updatedAt
    }
  }
`;

const DELETE_CHAT = gql`
  mutation deleteChat($id: String!) {
    deleteChat(id: $id) {
      _id
      userId
      iamodelId
      title
      createdAt
      updatedAt
      messages {
        _id
        chatId
        role
        content
        bookmark
        rated
        createdAt
        updatedAt
      }
    }
  }
`;

const ChatItem = ({ chat, id }: { chat: any; id: any }) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const activeColors = Colors[isDarkMode ? "dark" : "light"];

  const [menuVisible, setMenuVisible] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [newChatName, setNewChatName] = useState(chat.title);
  const [message, setMessage] = useState("");

  const showMenu = () => setMenuVisible(true);
  const hideMenu = () => setMenuVisible(false);

  // Modal Eliminar Recordatorio
  const [isSmallModalVisibleDelete, setIsSmallModalVisibleDelete] =
    useState(false);

  const openSmallModalDelete = () => setIsSmallModalVisibleDelete(true);
  const closeSmallModalDelete = () => setIsSmallModalVisibleDelete(false);

  const { refetch } = useQuery(ME);

  // Editar Nombre de Chat ==========================================
  const handleEdit = () => {
    setIsEditing(true);
    hideMenu();
  };

  const [updateChat] = useMutation(EDIT_CHAT);

  const handleSave = async () => {
    try {
      const { data } = await updateChat({
        variables: {
          input: {
            id: id,
            title: newChatName,
          },
        },
      });
      if (data) {
        setIsEditing(false);
      }
    } catch (error) {}
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setNewChatName(chat.title); // Restaurar el nombre original
  };

  // Eliminat Chat ==========================================

  const [deleteChat] = useMutation(DELETE_CHAT);

  const handleDelete = async () => {
    console.log("Deleting Chat", id);
    try {
      const { data } = await deleteChat({
        variables: {
          id: id,
        },
      });
      if (data) {
        console.log("Chat deleted", data);
        refetch();
        closeSmallModalDelete();
      }
    } catch (error) {}
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
          <TouchableOpacity
            onPress={() => {
              handleSave();
            }}
          >
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
          <View style={styles(activeColors).chatItem}>
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
              onPress={() => {
                openSmallModalDelete();
              }} // TODO: Implementar modal para confirmar eliminación
              title="Eliminar Chat"
              leadingIcon="trash-can"
            />
          </Menu>
        </View>
      )}

      {/* Modal Delete Chat */}
      <Modal
        isVisible={isSmallModalVisibleDelete}
        onBackdropPress={closeSmallModalDelete}
      >
        <View style={styles(activeColors).smallModalContainer}>
          <View style={styles(activeColors).row}>
            <Text style={styles(activeColors).smallModalTitle}>
              Eliminar Conversación
            </Text>
            <Pressable
              style={styles(activeColors).modalButton}
              onPress={closeSmallModalDelete}
            >
              <MaterialCommunityIcons
                name="close"
                size={24}
                color={activeColors.primary}
              ></MaterialCommunityIcons>
            </Pressable>
          </View>
          <View style={styles(activeColors).row}>
            <Text style={styles(activeColors).body}>
              ¿Estás seguro de eliminar esta conversación?
            </Text>
          </View>

          <Text style={styles(activeColors).errorText}>{message}</Text>
          <View style={styles(activeColors).row}>
            <Pressable
              style={styles(activeColors).cancelButton}
              onPress={() => {
                closeSmallModalDelete();
              }}
            >
              <Text style={styles(activeColors).modalButtonText}>Cancelar</Text>
            </Pressable>
            <Pressable
              style={styles(activeColors).dangerButton}
              onPress={() => {
                handleDelete();
              }}
            >
              <Text style={styles(activeColors).modalButtonText}>Eliminar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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

    smallModalOverlay: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    smallModalContainer: {
      width: 400,
      padding: 20,
      alignSelf: "center",
      backgroundColor: activeColors.card,
      borderRadius: 10,
      alignItems: "center",
    },
    smallModalTitle: {
      fontSize: 18,
      color: activeColors.text,
      fontFamily: "Poppins-Bold",
    },
    modalButton: {
      marginLeft: 20,
    },
    modalButtonText: {
      color: "white",
      fontFamily: "Poppins-Regular",
    },
    pinkButton: {
      backgroundColor: activeColors.primary,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 10,
    },
    cancelButton: {
      backgroundColor: activeColors.divider,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 10,
    },
    dangerButton: {
      backgroundColor: activeColors.danger,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 10,
    },
    errorText: {
      marginTop: 10,
      marginHorizontal: 20,
      color: activeColors.danger,
      fontFamily: "Poppins-Regular",
      fontSize: 16,
      textAlign: "center",
    },
    row: {
      gap: 20,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 10,
    },
    body: {
      fontFamily: "Poppins-Regular",
      fontSize: 16,
      color: activeColors.text,
      textAlign: "center",
    },
  });

export default ChatItem;
