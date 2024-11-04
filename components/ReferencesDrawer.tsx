import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  FlatList,
  Linking,
  Pressable,
  Easing,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const drawerWidth = 300;

const ReferenciaItem = ({ referencia }: { referencia: any }) => {
  return (
    <View style={styles.refer}>
      <MaterialIcons
        name="menu-book"
        size={24}
        color={Colors.light.textSecondary}
      />
      <View>
        <Text numberOfLines={1} style={styles.sub1}>
          {referencia.title}
        </Text>
        <Pressable
          onPress={() => {
            Linking.openURL(referencia.link);
          }}
        >
          <Text numberOfLines={1} style={styles.sub2}>
            {referencia.link}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const referencias = [
  {
    id: "1",
    title: "Inscripción en el RFC",
    link: "https://www.sat.gob.mx/gobmx/Paginas/ficha_3_cff.html",
  },
  {
    id: "2",
    title: "Registro Federal de Contribuyentes",
    link: "https://www.bbva.mx/educacion-financiera/r/registro-federal-de-contribuyentes-rfc.html",
  },
];

const ReferencesDrawer = ({
  isVisible,
  toggleDrawer,
}: {
  isVisible: any;
  toggleDrawer: any;
}) => {
  const animatedValue = useRef(
    new Animated.Value(isVisible ? 0 : drawerWidth)
  ).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isVisible ? 0 : drawerWidth,
      duration: 300, // Duración más corta para una animación rápida
      easing: Easing.out(Easing.circle), // Efecto de suavizado
      useNativeDriver: true,
    }).start();
  }, [isVisible]);

  return (
    <Animated.View
      style={[styles.drawer, { transform: [{ translateX: animatedValue }] }]}
    >
      <View>
        <FlatList
          ListHeaderComponent={
            <View style={styles.header}>
              <TouchableOpacity onPress={toggleDrawer}>
                <MaterialCommunityIcons
                  name="text-search"
                  size={24}
                  color={Colors.light.textSecondary}
                />
              </TouchableOpacity>
              <Text style={styles.h6}>Referencias</Text>
            </View>
          }
          data={referencias}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ReferenciaItem referencia={item} />}
        />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  drawer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    width: drawerWidth,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    padding: 20,
    zIndex: 1000,
  },
  header: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  h6: {
    fontSize: 20,
    fontFamily: "Poppins-Bold",
    color: Colors.light.text,
  },
  refer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.secondary,
  },
  sub1: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    color: Colors.light.text,
    width: "80%",
  },
  sub2: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: Colors.light.textHint,
  },
});

export default ReferencesDrawer;
