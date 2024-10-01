// ModalWithTabs.tsx
import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Dimensions } from "react-native";
import Modal from "react-native-modal";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { useWindowDimensions } from "react-native";
import { Colors } from "@/constants/Colors";
import { Switch, TextInput } from "react-native-paper";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import ReminderItem from "./ReminderItem";
import IaMessageBookmark from "./IaMessageBookmark";
import { ScrollView } from "react-native-gesture-handler";
import { Dropdown } from "react-native-element-dropdown";
import { DatePickerInput } from "react-native-paper-dates";

const FirstTab = () => {
  const width = Dimensions.get("window").width;
  const isMobile = width < 900; // Ajusta el umbral según tus necesidades
  const data = [
    { label: "Item 1", value: "1" },
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
    { label: "Item 4", value: "4" },
    { label: "Item 5", value: "5" },
    { label: "Item 6", value: "6" },
    { label: "Item 7", value: "7" },
    { label: "Item 8", value: "8" },
  ];

  const [value, setValue] = useState<string | null>(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text
          style={[styles.label, isFocus && { color: Colors.light.primary }]}
        >
          Régimen Fiscal
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.tabContent}>
      <View style={styles.column}>
        <Text style={styles.h6}>Configuración de Perfil</Text>
        <Pressable>
          <MaterialCommunityIcons
            name="pencil"
            size={24}
          ></MaterialCommunityIcons>
        </Pressable>
      </View>
      <View style={isMobile ? styles.mobileColumn : styles.column}>
        <View>
          <View style={isMobile ? styles.mobileRow : styles.row}>
            <Text style={styles.body}>Nombre</Text>
            <TextInput
              placeholder="Nombre"
              mode="outlined"
              disabled
            ></TextInput>
          </View>
          <View style={isMobile ? styles.mobileRow : styles.row}>
            <Text style={styles.body}>Apellido</Text>
            <TextInput
              placeholder="Apellido"
              mode="outlined"
              disabled
            ></TextInput>
          </View>
        </View>
        <View>
          <View style={isMobile ? styles.mobileRow : styles.row}>
            <Text style={styles.body}>Correo Electrónico</Text>
            <Text style={styles.body}>ejemplo@gmail.com</Text>
          </View>
          <View style={isMobile ? styles.mobileRow : styles.row}>
            <Text style={styles.body}>Contraseña Actual</Text>
            <TextInput
              placeholder="Contraseña Actual"
              mode="outlined"
              disabled
            ></TextInput>
          </View>
          <View style={isMobile ? styles.mobileRow : styles.row}>
            <Text style={styles.body}>Régimen Fiscal</Text>
            <View style={styles.container}>
              {renderLabel()}
              <Dropdown
                style={[
                  styles.dropdown,
                  isFocus && { borderColor: Colors.light.primary },
                ]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? "Selecciona una opción" : ""}
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item) => {
                  setValue(item.value);
                  setIsFocus(false);
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const SecondTab = () => {
  const [isPushOn, setIsPushOn] = React.useState(false);
  const onToggleSwitchPush = () => setIsPushOn(!isPushOn);

  const [isEmailOn, setIsEmailOn] = React.useState(false);
  const onToggleSwitchEmail = () => setIsEmailOn(!isEmailOn);

  const [isSmallModalVisible, setIsSmallModalVisible] = useState(false);

  const openSmallModal = () => setIsSmallModalVisible(true);
  const closeSmallModal = () => setIsSmallModalVisible(false);

  const [inputDate, setInputDate] = React.useState(new Date());

  const width = Dimensions.get("window").width;
  const isMobile = width < 600; // Detecta si el dispositivo es móvil

  return (
    <View style={styles.tabContent}>
      <View style={[styles.column, { justifyContent: "space-around" }]}>
        <View>
          <View style={styles.column}>
            <Text style={styles.h6}>Recordatorios</Text>
            <Pressable style={styles.buttonAdd} onPress={openSmallModal}>
              <MaterialCommunityIcons
                name="plus"
                size={24}
                color={Colors.light.primary}
              />
              <Text style={[styles.body, styles.primary]}>Agregar</Text>
            </Pressable>
          </View>
          <ReminderItem
            date={"24/12/24"}
            id={2}
            title={"Pagar tdc"}
          ></ReminderItem>
        </View>
        <View>
          <Text style={styles.h6}>Notificaciones</Text>

          <View style={styles.notis}>
            <Text style={styles.body}>Notificaciones Push</Text>
            <Switch
              color={Colors.light.primary}
              value={isPushOn}
              onValueChange={onToggleSwitchPush}
            />
          </View>
          <View style={styles.notis}>
            <Text style={styles.body}>Notificaciones por email</Text>
            <Switch
              color={Colors.light.primary}
              value={isEmailOn}
              onValueChange={onToggleSwitchEmail}
            />
          </View>
        </View>
      </View>

      {/* Modal Pequeño */}
      <Modal isVisible={isSmallModalVisible} onBackdropPress={closeSmallModal}>
        <View style={styles.smallModalContainer}>
          <View style={styles.row}>
            <Text style={styles.smallModalTitle}>Agregar Recordatorio</Text>
            <Pressable style={styles.modalButton} onPress={closeSmallModal}>
              <MaterialCommunityIcons
                name="close"
                size={24}
                color={Colors.light.primary}
              ></MaterialCommunityIcons>
            </Pressable>
          </View>
          <View style={styles.row}>
            <Text style={styles.body}>Nombre</Text>
            <TextInput placeholder="Nombre" mode="outlined"></TextInput>
          </View>
          <View style={styles.row}>
            <Text style={styles.body}>Fecha</Text>
            <View
              style={{
                justifyContent: "center",
                flex: 1,
                alignItems: "center",
              }}
            >
              <DatePickerInput
                locale="es"
                label="Fecha"
                value={inputDate}
                onChange={(d) => setInputDate(d)}
                inputMode="end"
                style={{ width: 200 }}
                mode="outlined"
              />
            </View>
          </View>
          <Pressable style={styles.pinkButton} onPress={closeSmallModal}>
            <Text style={styles.modalButtonText}>Guardar</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

const ThirdTab = () => (
  <View style={styles.tabContent}>
    <ScrollView>
      <IaMessageBookmark
        message={
          "La e.firma es una herramienta digital que sirve para validar tu identidad en línea y así poder realizar cualquier trámite de forma segura en México, contando con la misma validez que de una firma autógrafa. La firma electrónica avanzada tiene como función principal validar tu identidad de forma digital al utilizar 3 componentes únicos y a los cuales solo tú tienes acceso."
        }
      ></IaMessageBookmark>
    </ScrollView>
  </View>
);

interface ModalWithTabsProps {
  isVisible: boolean;
  onClose: () => void;
}

const ModalWithTabs: React.FC<ModalWithTabsProps> = ({
  isVisible,
  onClose,
}) => {
  const [index, setIndex] = React.useState(0);
  const layout = useWindowDimensions();
  const width = Dimensions.get("window").width;
  const isMobile = width < 900; // Determina si es un dispositivo móvil

  const [routes] = React.useState([
    { key: "first", title: "Editar Perfil" },
    { key: "second", title: "Recordatorios y Notificaciones" },
    { key: "third", title: "Mensajes Destacados" },
  ]);

  const renderScene = SceneMap({
    first: FirstTab,
    second: SecondTab,
    third: ThirdTab,
  });

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      style={[
        styles.modal,
        {
          maxWidth: isMobile ? "100%" : 1000,
          width: isMobile ? "100%" : "90%",
        },
      ]}
    >
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}> Configuración</Text>

        {/* Tabs */}
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={(props) => (
            <TabBar
              style={{ backgroundColor: "white" }}
              activeColor={Colors.light.secondary}
              inactiveColor={Colors.light.text}
              labelStyle={{
                fontFamily: "Poppins-Regular",
                textTransform: "capitalize",
              }}
              indicatorStyle={{ backgroundColor: Colors.light.secondary }}
              {...props}
            />
          )}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: "center",
    alignSelf: "center", // Centrar modal en pantallas grandes
    padding: 20,
  },
  modalContainer: {
    alignContent: "center",
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 34,
    fontFamily: "Poppins-Regular",
    textAlign: "left",
    marginBottom: 20, // Espacio entre el título y las pestañas
  },
  tabContent: {
    flex: 1,
    padding: 20,
  },
  column: {
    flexDirection: "row",
    gap: 20,
  },
  mobileColumn: {
    flexDirection: "column",
    gap: 20,
  },
  row: {
    gap: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  mobileRow: {
    gap: 20,
    flexDirection: "column", // Los elementos se apilan en una columna en móvil
    justifyContent: "space-between",
    alignItems: "flex-start", // Alinea el contenido a la izquierda en vez del centro
    paddingVertical: 10,
  },
  buttonAdd: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.light.divider,
  },
  h6: {
    fontSize: 20,
    fontFamily: "Poppins-Bold",
  },
  notis: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
    paddingVertical: 10,
  },
  body: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
  },
  primary: {
    color: Colors.light.primary,
  },
  /* row: {
    gap: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  }, */
  container: {
    backgroundColor: "white",
    fontFamily: "Poppins-Regular",
  },
  dropdown: {
    minWidth: 230,
    height: 50,
    borderColor: Colors.light.divider,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    fontFamily: "Poppins-Regular",
  },
  label: {
    color: Colors.light.divider,
    fontFamily: "Poppins-Regular",
    position: "absolute",
    backgroundColor: "white",
    left: 15,
    top: -8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
  },
  selectedTextStyle: {
    fontSize: 16,
    color: Colors.light.text,
    fontFamily: "Poppins-Regular",
  },

  // Estilos del modal pequeño
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
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  smallModalTitle: {
    fontSize: 18,
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
    backgroundColor: Colors.light.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 20,
  },
});

export default ModalWithTabs;
