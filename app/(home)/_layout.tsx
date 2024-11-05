import React from "react";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Drawer } from "expo-router/drawer";
import { useWindowDimensions } from "@/hooks/useDimensions";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { router, useNavigation } from "expo-router";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import BlackButton from "@/components/BlackButton";

export default function HomeLayout() {
  const colorScheme = useColorScheme();
  const { width } = Dimensions.get("window");

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
            handlePress={() => router.navigate("/login")}
            isLoading={false}
          ></BlackButton>
        </View>
      </DrawerContentScrollView>
    );
  }

  return (
    <Drawer
      initialRouteName="index"
      drawerContent={(props) => <CustomDrawerContent {...props} />} // Uso del contenido personalizado
      screenOptions={{
        drawerActiveBackgroundColor: Colors.light.primary,
        drawerActiveTintColor: Colors.light.onPrimary,
        drawerInactiveBackgroundColor: Colors.light.primaryLight,
        drawerInactiveTintColor: Colors.light.text,
        drawerContentContainerStyle: {
          backgroundColor: Colors.light.primaryLight,
        },
        drawerContentStyle: {
          backgroundColor: Colors.light.primaryLight,
        },
        drawerStyle: {
          backgroundColor: Colors.light.primaryLight,
        },
        headerShown: false,
        drawerLabelStyle: {
          fontFamily: "Poppins-Regular",
          fontSize: 14,
        },
        headerStyle: {
          backgroundColor: Colors.light.primary,
        },
        headerTintColor: Colors.light.onPrimary,
      }}
    >
      <Drawer.Screen
        name="index"
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
    </Drawer>
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
    marginTop: "90%",
    padding: 20,
    alignSelf: "center",
  },
});
