import {
  Image,
  StyleSheet,
  Platform,
  View,
  Button,
  Dimensions,
  ScrollView,
  Pressable,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import * as React from "react";
import { Divider, Drawer, Menu } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HelloWave } from "@/components/HelloWave";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Card, PaperProvider, Text } from "react-native-paper";
import { useState } from "react";
import LeftDrawer from "@/components/LeftDrawer";
import RightDrawer from "@/components/RightDrawer";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";

const chats = [
  { id: "1", name: "Chat 1" },
  { id: "2", name: "Chat 2" },
  { id: "3", name: "Chat 3" },
  // Agrega más chats según sea necesario
];

const ChatItem = ({ chat, onSelectChat }: { chat: any; onSelectChat: any }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const showMenu = () => setMenuVisible(true);
  const hideMenu = () => setMenuVisible(false);

  return (
    <View style={styles.chatItemContainer}>
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
          <TouchableOpacity onPress={showMenu}>Show menu</TouchableOpacity>
        }
      >
        <Menu.Item onPress={() => {}} title="Item 1" />
        <Menu.Item onPress={() => {}} title="Item 2" />
        <Divider />
        <Menu.Item onPress={() => {}} title="Item 3" />
      </Menu>
    </View>
  );
};

export default function ChatUser({ navigation }: { navigation: any }) {
  const { width } = Dimensions.get("window");
  const [active, setActive] = React.useState("");

  const [isLeftDrawerVisible, setLeftDrawerVisible] = useState(false);
  const [isRightDrawerVisible, setRightDrawerVisible] = useState(false);

  const toggleLeftDrawer = () => {
    setLeftDrawerVisible(!isLeftDrawerVisible);
  };

  const toggleRightDrawer = () => {
    setRightDrawerVisible(!isRightDrawerVisible);
  };

  const handleSelectChat = (chatId: any) => {
    console.log("Selected Chat ID:", chatId);
    // Navegar a la pantalla del chat con el ID correspondiente
  };

  return (
    <SafeAreaView>
      <LeftDrawer
        isVisible={isLeftDrawerVisible}
        toggleDrawer={toggleLeftDrawer}
        navigation={navigation}
      />
      <RightDrawer
        isVisible={isRightDrawerVisible}
        toggleDrawer={toggleRightDrawer}
      />

      <View>
        {width < 880 ? (
          <Button title="Toggle Left Drawer" onPress={toggleLeftDrawer} />
        ) : null}
        <Button title="Toggle Right Drawer" onPress={toggleRightDrawer} />
      </View>

      <View style={styles.container}>
        <View style={styles.sidebar}>
          {/* ====================== SIDEBAR TITLE =============================== */}
          <View style={styles.sidebarHeader}>
            <Image
              source={require("./../../assets/images/logo.png")}
              style={styles.logo}
            ></Image>
            <Text style={styles.title}> Cuentame +</Text>
          </View>
          <Divider bold />

          {/* =================== CREATE CHAT BUTTON ============================ */}
          <TouchableOpacity
            style={styles.buttonCreate}
            onPress={function (): void {
              throw new Error("Function not implemented.");
            }}
          >
            <MaterialCommunityIcons
              name="plus"
              size={24}
            ></MaterialCommunityIcons>
            <Text style={styles.textButton}> Crear Conversación</Text>
          </TouchableOpacity>
          <Divider bold />

          {/* ============= LISTA DE CONVERSACIONES ============================== */}
          <Text style={styles.subtitle2}>Conversaciones anteriores</Text>
          {/* <FlatList
            data={chats}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ChatItem chat={item} onSelectChat={handleSelectChat} />
            )}
            style={styles.sidebar}
          /> */}
          <FlatList
            data={chats}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ChatItem chat={item} onSelectChat={handleSelectChat}></ChatItem>
              /* <View>
                <Pressable
                  onPress={function (): void {
                    throw new Error("Function not implemented. " + item);
                  }}
                >
                  <Text>{item.name}</Text>
                </Pressable>
                <Pressable>
                  <MaterialCommunityIcons name="more"></MaterialCommunityIcons>
                </Pressable>
              </View> */
            )}
          />
        </View>

        {/* =========================  CHAT SECTION ============================ */}
        <ScrollView>
          <View style={styles.card}>
            <Text style={styles.cardText}>Contenido Dinámico</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    minHeight: "100%",
    flexDirection: "row",
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
    fontSize: 34,
  },
  logo: {
    width: 70,
    height: 70,
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
    fontFamily: "Poppins-Bold",
    fontSize: 14,
    color: Colors.light.text,
  },

  content: {
    flexGrow: 1,
    height: "100%",
    minHeight: "100%",
    padding: 16,
    backgroundColor: "#ecf0f1",
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  cardText: {
    fontSize: 16,
    color: "#34495e",
  },

  chatItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  chatItem: {
    flex: 1,
  },
  chatName: {
    fontSize: 16,
    color: "#333",
  },
  menuButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  menuButtonText: {
    fontSize: 20,
    color: "#333",
  },
  deleteItem: {
    color: "red",
  },
});
