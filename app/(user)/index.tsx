import ChatItem from "@/components/ChatItem";
import IaMessage from "@/components/IaMessage";
import ReferencesDrawer from "@/components/ReferencesDrawer";
import SidebarDrawer from "@/components/SidebarDrawer";
import UserMessage from "@/components/UserMessage";
import { Colors } from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { Avatar, Divider, TextInput } from "react-native-paper";

const chats = [
  { id: "1", name: "Que son los puntos infonavit y como usarlos" },
  { id: "2", name: "Chat 2" },
  { id: "3", name: "Chat 3" },
];

export default function userScreen() {
  const { width } = Dimensions.get("window");

  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

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
    <SafeAreaView style={styles.safeArea}>
      <SidebarDrawer
        isVisible={isLeftDrawerVisible}
        toggleDrawer={toggleLeftDrawer}
      />
      <ReferencesDrawer
        isVisible={isRightDrawerVisible}
        toggleDrawer={toggleRightDrawer}
      />

      {width < 880 ? (
        <View style={styles.headerMobile}>
          <View style={styles.headerMobile2}>
            <TouchableOpacity onPress={toggleLeftDrawer}>
              <MaterialCommunityIcons
                name="menu"
                size={24}
              ></MaterialCommunityIcons>
            </TouchableOpacity>
            <Image
              source={require("./../../assets/images/logo.png")}
              style={styles.logoHeader}
            ></Image>

            <Text style={styles.titleHeader}>Cuentame +</Text>
          </View>
          <TouchableOpacity onPress={toggleRightDrawer}>
            <MaterialCommunityIcons
              name="text-search"
              size={24}
            ></MaterialCommunityIcons>
          </TouchableOpacity>
        </View>
      ) : null}

      <View style={styles.container}>
        {width > 880 ? (
          <View style={styles.sidebar}>
            {/* ====================== SIDEBAR TITLE =============================== */}
            <View style={styles.sidebarHeader}>
              <Image
                source={require("./../../assets/images/logo.png")}
                style={styles.logo}
              ></Image>
              <Pressable onPress={() => router.navigate("/")}>
                <Text style={styles.titleHeader}>Cuentame +</Text>
              </Pressable>
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

            <FlatList
              data={chats}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <ChatItem
                  chat={item}
                  onSelectChat={handleSelectChat}
                ></ChatItem>
              )}
            />

            <Divider bold />
            <View style={styles.sidebarFooter}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                  minWidth: 240,
                }}
              >
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

              {/* <ConfigModal
                isVisible={isModalVisible}
                onClose={hideModal}
              ></ConfigModal> */}
            </View>
          </View>
        ) : null}

        {/* ===============================   CHATS ================================= */}
        <View style={styles.cardContainer}>
          <View style={{ flexDirection: "row-reverse", flex: 1 }}>
            {width > 880 ? (
              <TouchableOpacity
                onPress={toggleRightDrawer}
                style={{ maxWidth: 24, width: 24, margin: 10, flex: 1 }}
              >
                <MaterialCommunityIcons
                  name="text-search"
                  size={24}
                  color={Colors.light.text}
                ></MaterialCommunityIcons>
              </TouchableOpacity>
            ) : null}
            <View style={styles.card}>
              <ScrollView style={{ gap: 20 }}>
                <UserMessage message="Que es el RFC?" />
                <IaMessage message="El RFC es una clave única de registro utilizada en México para identificar a las personas físicas y morales que realizan actividades económicas y deben contribuir con el gasto público ante el SAT (Servicio de Administración Tributaria). Esta clave se compone de 13 caracteres alfanuméricos, formados por las iniciales del nombre de la persona física o moral, seguido de la fecha de nacimiento o constitución y 3 caracteres más llamados homoclave que el SAT otorga para que el RFC sea una clave única e irrepetible entre todos los contribuyentes del país" />
                {/* <PreguntasPreguntadas></PreguntasPreguntadas> */}
              </ScrollView>
            </View>
          </View>

          {/* ================= INPUT TEXT =============================== */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              style={{ flex: 1, height: 50, flexShrink: 0 }}
              mode="outlined"
              label={"Ingresa tu pregunta"}
              outlineColor={Colors.light.secondaryDark}
              theme={{
                colors: {
                  primary: Colors.light.secondaryDark,
                  text: Colors.light.text,
                  placeholder: Colors.light.text,
                  background: Colors.light.background,
                },
                fonts: {
                  regular: { fontFamily: "Poppins-Regular" },
                },
              }}
              outlineStyle={{ borderRadius: 10, borderWidth: 2 }}
              underlineStyle={{ backgroundColor: "transparent" }}
              left={
                <TextInput.Icon
                  icon="pencil"
                  color={Colors.light.secondaryDark}
                />
              }
              right={
                <TextInput.Icon
                  icon="microphone"
                  color={Colors.light.textSecondary}
                  onPress={() => {
                    throw new Error("Function not implemented.");
                  }}
                />
              }
            ></TextInput>

            {/* =================== SEND BUTTON =================== */}
            <View style={styles.sendButton}>
              <TouchableOpacity
                onPress={() => {
                  throw new Error("Envianding.");
                }}
              >
                <MaterialCommunityIcons
                  name="send"
                  color={Colors.light.secondaryDark}
                  size={24}
                ></MaterialCommunityIcons>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  headerMobile: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    gap: 10,
    backgroundColor: Colors.light.primary,
  },
  headerMobile2: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
  container: {
    margin: 10,
    flex: 1,
    flexDirection: "row",
  },
  sidebar: {
    width: 300,
    backgroundColor: Colors.light.primary,
    padding: 20,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 16,
  },
  cardContainer: {
    flex: 1,
    flexGrow: 1,
    marginHorizontal: 10,
    backgroundColor: "#fff",
  },
  card: {
    flex: 1,
    minHeight: "99%",
    height: "99%",
    flexGrow: 3,
    backgroundColor: "#fff",
    padding: 20,
    marginBottom: 15,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  cardText: {
    fontSize: 16,
  },

  sidebarHeader: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  title: {
    fontFamily: "Poppins-Bold",
    color: Colors.light.onPrimary,
    fontSize: 28,
  },
  titleHeader: {
    fontFamily: "Poppins-Bold",
    color: Colors.light.onPrimary,
    fontSize: 28,
  },
  logo: {
    width: 70,
    height: 70,
  },
  logoHeader: {
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
    fontFamily: "Poppins-Bold",
    fontSize: 14,
    color: Colors.light.text,
    paddingVertical: 10,
  },

  content: {
    flexGrow: 1,
    height: "100%",
    minHeight: "100%",
    padding: 16,
    backgroundColor: "#ecf0f1",
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
  deleteItem: {
    color: "red",
  },
  sidebarFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  body1: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: Colors.light.text,
  },
  sendButton: {
    height: 50,
    width: 50,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderColor: Colors.light.secondaryDark,
    borderWidth: 2,
    padding: 10,
    marginLeft: 10,
  },
});
