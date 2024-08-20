import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Dimensions, View, Image, Text, StyleSheet } from "react-native";
import FaqScreen from "./faq";
import CuentameMasScreen from "./cuentamemas";
import TermsOfServiceScreen from "./tos";
import PrivacyScreen from "./privacy";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import BlackButton from "@/components/BlackButton";
import LoginScreen from "../(auth)/login";
import RegisterScreen from "../(auth)/register";

export default function TabLayout() {
  const { width } = Dimensions.get("window");
  const colorScheme = useColorScheme();

  const Drawer = createDrawerNavigator();

  function CustomDrawerContent(props: any) {
    const navigation = useNavigation();

    return (
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerHeader}>
          <Image
            source={require("./../../assets/images/logo.png")}
            style={styles.drawerImage}
          />
          <Text style={styles.drawerTitle}>Cuéntame +</Text>
        </View>

        <DrawerItemList {...props} />

        <View style={styles.drawerFooter}>
          <BlackButton
            title={"Iniciar Sesión"}
            handlePress={() => navigation.navigate("login")}
            isLoading={false}
          ></BlackButton>
        </View>
      </DrawerContentScrollView>
    );
  }

  return (
    <Drawer.Navigator
      initialRouteName="CuentameMas"
      screenOptions={{
        drawerActiveBackgroundColor: Colors.light.primary,
        drawerActiveTintColor: Colors.light.onPrimary,
        drawerInactiveBackgroundColor: Colors.light.primaryLight,
        drawerInactiveTintColor: Colors.light.text,
        drawerContentContainerStyle: {
          backgroundColor: Colors.light.primaryLight,
        },
        drawerContentStyle: {
          backgroundColor: Colors.light.primary,
        },
        drawerStyle: {
          backgroundColor: Colors.light.primaryLight,
        },

        drawerLabelStyle: {
          fontFamily: "Poppins-Regular",
          fontSize: 14,
        },
        headerStyle: {
          backgroundColor: Colors.light.primary,
        },
        headerTintColor: Colors.light.onPrimary,
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />} // Uso del contenido personalizado
    >
      <Drawer.Screen
        name="CuentameMas"
        component={CuentameMasScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
          drawerLabel: "Menú Principal",

          headerTitle: () => (
            <View style={styles.header}>
              <Image
                style={styles.logo}
                source={require("./../../assets/images/logo.png")}
              />
              <Text style={styles.title}>Cuéntame +</Text>
            </View>
          ),
          headerShown: width < 880 ? true : false,
        }}
      />
      <Drawer.Screen
        name="faq"
        component={FaqScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="frequently-asked-questions"
              size={size}
              color={color}
            />
          ),
          drawerLabel: "Preguntas Frecuentes",
          headerTitle: () => (
            <View style={styles.header}>
              <Image
                style={styles.logo}
                source={require("./../../assets/images/logo.png")}
              />
              <Text style={styles.title}>Cuentame +</Text>
            </View>
          ),
          headerShown: width < 880 ? true : false,
        }}
      />
      <Drawer.Screen
        name="tos"
        component={TermsOfServiceScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="file-document"
              size={size}
              color={color}
            />
          ),
          drawerLabel: "Términos y Condiciones",
          headerTitle: () => (
            <View style={styles.header}>
              <Image
                style={styles.logo}
                source={require("./../../assets/images/logo.png")}
              />
              <Text style={styles.title}>Cuentame +</Text>
            </View>
          ),
          headerShown: width < 880 ? true : false,
        }}
      />
      <Drawer.Screen
        name="privacy"
        component={PrivacyScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="shield-lock"
              size={size}
              color={color}
            />
          ),
          drawerLabel: "Políticas de Privacidad",
          headerTitle: () => (
            <View style={styles.header}>
              <Image
                style={styles.logo}
                source={require("./../../assets/images/logo.png")}
              />
              <Text style={styles.title}>Cuentame +</Text>
            </View>
          ),
          headerShown: width < 880 ? true : false,
        }}
      />
      <Drawer.Screen
        name="login"
        component={LoginScreen}
        options={{
          headerShown: width < 880 ? true : false,

          drawerActiveBackgroundColor: Colors.light.primaryLight,
          drawerLabel: () => null, // Oculta la ruta en el drawer
          drawerIcon: () => null, // También oculta el icono
          headerTitle: () => (
            <View style={styles.header}>
              <Image
                style={styles.logo}
                source={require("./../../assets/images/logo.png")}
              />
              <Text style={styles.title}>Cuentame +</Text>
            </View>
          ),
        }}
      />

      {/* Ruta de Registro - Oculta en el drawer */}
      <Drawer.Screen
        name="register"
        component={RegisterScreen}
        options={{
          headerShown: width < 880 ? true : false,

          drawerActiveBackgroundColor: Colors.light.primaryLight,
          drawerLabel: () => null, // Oculta la ruta en el drawer
          drawerIcon: () => null, // También oculta el icono
          headerTitle: () => (
            <View style={styles.header}>
              <Image
                style={styles.logo}
                source={require("./../../assets/images/logo.png")}
              />
              <Text style={styles.title}>Cuentame +</Text>
            </View>
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    gap: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 24,
    color: "#ffffff",
    fontFamily: "Poppins-Bold",
  },
  drawerHeader: {
    padding: 20,
    alignItems: "flex-start",
  },
  drawerImage: {
    width: 70,
    height: 70,
    marginBottom: 10,
  },
  drawerTitle: {
    color: "#ffffff",
    fontSize: 34,
    fontFamily: "Poppins-Bold",
  },
  drawerFooter: {
    marginTop: "auto",
    padding: 20,
    alignSelf: "center",
  },
});
