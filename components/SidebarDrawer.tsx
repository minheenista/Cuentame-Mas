// LeftDrawer.js
import { Colors } from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
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
  useColorScheme,
  Easing,
} from "react-native";
import { Avatar, Divider } from "react-native-paper";
import ChatItem from "./ChatItem";
import ConfigModal from "./ConfigModal";
import { gql, useQuery } from "@apollo/client";

const chats = [
  { id: "1", name: "Que son los puntos infonavit y como usarlos?" },
  { id: "2", name: "Chat 2" },
  { id: "3", name: "Chat 3" },
  // Agrega más chats según sea necesario
];

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

const drawerWidth = 300;

const SidebarDrawer = ({
  isVisible,
  toggleDrawer,
}: {
  isVisible: any;
  toggleDrawer: any;
}) => {
  const animatedValue = useRef(
    new Animated.Value(isVisible ? 0 : -drawerWidth)
  ).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isVisible ? 0 : -drawerWidth,
      duration: 300, // Duración más corta para una animación rápida
      easing: Easing.out(Easing.circle), // Efecto de suavizado
      useNativeDriver: true,
    }).start();
  }, [isVisible]);

  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const activeColors = Colors[isDarkMode ? "dark" : "light"];

  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  const handleSelectChat = (chatId: any) => {
    console.log("Selected Chat ID:", chatId._id);
    // Navegar a la pantalla del chat con el ID correspondiente
  };

  // Info de usuario
  const { data, loading, error } = useQuery(ME);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  const { me } = data || {}; // Desestructuramos 'me' directamente

  if (!me) {
    return <Text>No user data available.</Text>;
  }

  const Chats = me.chats; // Accedemos directamente a los 'chats'

  return (
    <Animated.View
      style={[
        styles(activeColors).drawer,
        { transform: [{ translateX: animatedValue }] },
      ]}
    >
      <TouchableOpacity onPress={toggleDrawer}>
        <Text style={styles(activeColors).closeButton}>X</Text>
      </TouchableOpacity>
      {/* ====================== SIDEBAR TITLE =============================== */}
      <View style={styles(activeColors).sidebarHeader}>
        <Image
          source={require("./../assets/images/logo.png")}
          style={styles(activeColors).logo}
        ></Image>
        <Text style={styles(activeColors).title}> Cuentame +</Text>
      </View>
      <Divider />
      {/* =================== CREATE CHAT BUTTON ============================ */}
      <TouchableOpacity
        style={styles(activeColors).buttonCreate}
        onPress={function (): void {
          throw new Error("Function not implemented.");
        }}
      >
        <MaterialCommunityIcons
          name="plus"
          size={24}
          color={activeColors.text}
        ></MaterialCommunityIcons>
        <Text style={styles(activeColors).textButton}> Crear Conversación</Text>
      </TouchableOpacity>
      <Divider />
      {/* ============= LISTA DE CONVERSACIONES ============================== */}
      <Text style={styles(activeColors).subtitle2}>
        Conversaciones anteriores
      </Text>
      <FlatList
        data={Chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              handleSelectChat(item._id);
            }}
          >
            <ChatItem chat={item} id={item._id}></ChatItem>
          </TouchableOpacity>
        )}
      />
      <Divider />
      <View style={styles(activeColors).sidebarFooter}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Avatar.Text
            label={data.me.name.charAt(0).toUpperCase()}
            size={36}
          ></Avatar.Text>
          <Text style={styles(activeColors).body1}>{data.me.name}</Text>
        </View>

        <Pressable onPress={showModal}>
          <MaterialCommunityIcons
            name="cog"
            size={24}
            color={activeColors.text}
          ></MaterialCommunityIcons>
        </Pressable>
      </View>
      <ConfigModal
        isVisible={isModalVisible}
        onClose={hideModal}
        userInfo={data.me}
      ></ConfigModal>
    </Animated.View>
  );
};

const styles = (activeColors: any) =>
  StyleSheet.create({
    drawer: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      zIndex: 1000,
      width: drawerWidth,
      backgroundColor: activeColors.primaryDark,
      shadowColor: activeColors.cardShadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 5,
      padding: 20,
    },
    closeButton: {
      textAlign: "right",
      marginTop: 20,
      fontSize: 18,
      fontWeight: "bold",
      fontFamily: "Poppins-Bold",
      color: activeColors.text,
    },
    sidebarHeader: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 10,
    },
    title: {
      fontFamily: "Poppins-Bold",
      color: activeColors.lightTitle,
      fontSize: 24,
    },
    logo: {
      width: 50,
      height: 50,
    },
    buttonCreate: {
      marginVertical: 5,
      padding: 10,
      borderRadius: 8,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    textButton: {
      fontFamily: "Poppins-Regular",
      fontSize: 16,
      color: activeColors.text,
    },
    subtitle2: {
      marginVertical: 15,
      fontFamily: "Poppins-Bold",
      fontSize: 14,
      color: activeColors.text,
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

    sidebarFooter: {
      marginTop: 20,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
    },
    body1: {
      fontFamily: "Poppins-Regular",
      fontSize: 16,
      color: activeColors.text,
    },
  });

export default SidebarDrawer;
