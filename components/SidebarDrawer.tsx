// LeftDrawer.js
import { Colors } from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Image,
  Dimensions,
  TouchableOpacity,
  Button,
  FlatList,
  Pressable,
} from "react-native";
import { Avatar, Divider } from "react-native-paper";
import ChatItem from "./ChatItem";
//import ConfigModal from "./ConfigModal";

const chats = [
  { id: "1", name: "Que son los puntos infonavit y como usarlos?" },
  { id: "2", name: "Chat 2" },
  { id: "3", name: "Chat 3" },
  // Agrega más chats según sea necesario
];

const drawerWidth = 250;

const SidebarDrawer = ({
  isVisible,
  toggleDrawer,
}: {
  isVisible: any;
  toggleDrawer: any;
}) => {
  const animatedValue = new Animated.Value(isVisible ? 0 : -drawerWidth);

  Animated.timing(animatedValue, {
    toValue: isVisible ? 0 : -drawerWidth,
    duration: 300,
    useNativeDriver: true,
  }).start();

  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  const handleSelectChat = (chatId: any) => {
    console.log("Selected Chat ID:", chatId);
    // Navegar a la pantalla del chat con el ID correspondiente
  };

  return (
    <Animated.View
      style={[styles.drawer, { transform: [{ translateX: animatedValue }] }]}
    >
      <TouchableOpacity onPress={toggleDrawer}>
        <Text style={styles.closeButton}>X</Text>
      </TouchableOpacity>
      {/* ====================== SIDEBAR TITLE =============================== */}
      <View style={styles.sidebarHeader}>
        <Image
          source={require("./../assets/images/logo.png")}
          style={styles.logo}
        ></Image>
        <Text style={styles.title}> Cuentame +</Text>
      </View>
      <Divider />
      {/* =================== CREATE CHAT BUTTON ============================ */}
      <TouchableOpacity
        style={styles.buttonCreate}
        onPress={function (): void {
          throw new Error("Function not implemented.");
        }}
      >
        <MaterialCommunityIcons name="plus" size={24}></MaterialCommunityIcons>
        <Text style={styles.textButton}> Crear Conversación</Text>
      </TouchableOpacity>
      <Divider />
      {/* ============= LISTA DE CONVERSACIONES ============================== */}
      <Text style={styles.subtitle2}>Conversaciones anteriores</Text>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChatItem chat={item} onSelectChat={handleSelectChat}></ChatItem>
        )}
      />
      <Divider />
      <View style={styles.sidebarFooter}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Avatar.Text label="A" size={36}></Avatar.Text>
          <Text style={styles.body1}>Usuario</Text>
        </View>

        <Pressable onPress={showModal}>
          <MaterialCommunityIcons
            name="cog"
            size={24}
            color={Colors.light.text}
          ></MaterialCommunityIcons>
        </Pressable>
      </View>
      {/*       <ConfigModal isVisible={isModalVisible} onClose={hideModal}></ConfigModal>
       */}{" "}
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
    backgroundColor: Colors.light.primary,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    padding: 20,
  },
  closeButton: {
    textAlign: "right",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Poppins-Bold",
  },

  sidebar: {
    width: "auto",
    backgroundColor: Colors.light.primary,
    padding: 20,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  sidebarHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontFamily: "Poppins-Bold",
    color: Colors.light.onPrimary,
    fontSize: 24,
  },
  logo: {
    width: 50,
    height: 50,
  },
  buttonCreate: {
    padding: 10,
    borderRadius: 8,
    color: Colors.light.onPrimary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
  },
  subtitle2: {
    marginVertical: 15,
    fontFamily: "Poppins-Bold",
    fontSize: 14,
    color: Colors.light.text,
  },
  chatItemContainer: {
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
    justifyContent: "space-between",
    gap: 5,
  },
  chatName: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: Colors.light.text,
  },
  menuButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  menuButtonText: {
    fontFamily: "Poppins-Regular",
    fontSize: 20,
    color: "#333",
  },
  sidebarFooter: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  body1: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: Colors.light.text,
  },
});

export default SidebarDrawer;
