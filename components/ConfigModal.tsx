// ModalWithTabs.tsx
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
  useColorScheme,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import Modal from "react-native-modal";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { useWindowDimensions } from "react-native";
import { Colors } from "@/constants/Colors";
import { Switch, TextInput } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ReminderItem from "./ReminderItem";
import IaMessageBookmark from "./IaMessageBookmark";
import { Dropdown } from "react-native-element-dropdown";
import { DatePickerInput } from "react-native-paper-dates";
import { gql, useMutation, useQuery } from "@apollo/client";
import { registerTranslation } from "react-native-paper-dates";
import PinkButton from "./PinkButton";
registerTranslation("pl", {
  save: "Save",
  selectSingle: "Select date",
  selectMultiple: "Select dates",
  selectRange: "Select period",
  notAccordingToDateFormat: (inputFormat) =>
    `Date format must be ${inputFormat}`,
  mustBeHigherThan: (date) => `Must be later then ${date}`,
  mustBeLowerThan: (date) => `Must be earlier then ${date}`,
  mustBeBetween: (startDate, endDate) =>
    `Must be between ${startDate} - ${endDate}`,
  dateIsDisabled: "Day is not allowed",
  previous: "Previous",
  next: "Next",
  typeInDate: "Type in date",
  pickDateFromCalendar: "Pick date from calendar",
  close: "Close",
  hour: "",
  minute: "",
});

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

const UPDATE_USER = gql`
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      _id
      name
      lastname
      email
      regimenFiscal
      password
      createdAt
      updatedAt
    }
  }
`;

const FirstTab = () => {
  const width = Dimensions.get("window").width;
  const isMobile = width < 900; // Ajusta el umbral según tus necesidades

  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const activeColors = Colors[isDarkMode ? "dark" : "light"];

  // Regimen Fiscal Dropdown ===========================================================

  const regimenesFiscales = [
    { label: "No Definido", value: "NO_DEFINIDO" },
    { label: "Arrendamientos", value: "ARRENDAMIENTO" },
    {
      label: "Sueldos Y Salarios E Ingresos Asimmilados A Salarios",
      value: "SUELDOS_Y_SALARIOS",
    },
    { label: "Demás Ingresos", value: "DEMAS_INGRESOS" },
    {
      label: "Personas físicas con actividades empresariales y profesionales",
      value: "ACTIVIDADES_EMPRESARIALES",
    },
    { label: "Ingresos por Dividendos", value: "DIVIDENDOS" },
    { label: "Ingresos por Intereses", value: "INTERESES" },
    {
      label: "Régimen de los ingresos por obtencion de premios",
      value: "PREMIOS",
    },
    { label: "Sin Obligaciones Fiscales", value: "SIN_OBLIGACIONES" },
    { label: "Incorporación Fiscal", value: "INCORPORACION_FISCAL" },
    {
      label: "Actividades Agrícolas, Silvícolas, Pesqueras y similares",
      value: "ACTIVIDADES_AGSP",
    },
    { label: "Régimen Simplificado de Confianza", value: "RESICO" },
    {
      label:
        "De los Regímenes Fiscales Preferentes y de las Empresas Multinacionales",
      value: "REGIMENES_PREFERENTES",
    },
    {
      label: "Enajenación de Acciones en Bolsa de Valores",
      value: "ENAJENACION_ACCIONES",
    },
    {
      label:
        "Régimen de Actividades Empresariales con Ingresos a Través de Plataformas Tecnológicas",
      value: "PLATAFORMAS_TECNOLOGICAS",
    },
    {
      label: "General de Ley Personas Morales",
      value: "PERSONAS_MORALES",
    },
    {
      label: "Personas Morales con Fines no Lucrativos",
      value: "SIN_FINES_LUCRO",
    },
    {
      label: "Régimen de enajenación o adquisición de bienes",
      value: "ENAJENACION_BIENES",
    },
    { label: "Consolidación", value: "CONSOLIDACION" },
    {
      label: "Sociedades Cooperativas de Producción",
      value: "COOPERATIVAS",
    },
    {
      label: "Opcional para Grupos de Sociedades",
      value: "GRUPOS_SOCIEDADES",
    },
    { label: "Coordinados", value: "COORDINADOS" },
    { label: "Hidrocarburos", value: "HIDROCARBUROS" },
  ];

  const [value, setValue] = useState<string | null>(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text
          style={[
            styles(activeColors).label,
            isFocus && { color: activeColors.primary },
          ]}
        >
          Régimen Fiscal
        </Text>
      );
    }
    return null;
  };

  // Estados para la edición del perfil ===============================================
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [regimenFiscal, setRegimenFiscal] = useState<string | null>(null);
  const [secureText, setSecureText] = useState(true);
  const [secureTextConfirm, setSecureTextConfirm] = useState(true);
  const [secureTextOld, setSecureTextOld] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const toggleSecureText = () => {
    setSecureText(!secureText);
  };
  const toggleSecureTextConfirm = () => {
    setSecureTextConfirm(!secureTextConfirm);
  };
  const toggleSecureTextOld = () => {
    setSecureTextOld(!secureTextOld);
  };

  const toggleEdit = () => setIsEditing(!isEditing);

  // Volver al estado inicial ===============================================
  const cancelEdit = () => {
    setIsEditing(false);
    setNewPassword("");
    setConfirmPassword("");
  };

  // OBTENER INFORMACION DEL USUARIO ===============================================

  const findRegimenFiscal = (backendValue: string): string => {
    const match = regimenesFiscales.find(
      (regimen) => regimen.label === backendValue
    );
    return match!.value;
  };

  const { data, loading, error } = useQuery(ME);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  const { me } = data || {}; // Desestructuramos 'me' directamente

  if (!me) {
    return <Text>No user data available.</Text>;
  }

  const User = me;
  useEffect(() => {
    if (User) {
      setName(User.name);
      setSurname(User.lastname);
      //const regimenFiscalDynamic = findRegimenFiscal(User.regimenFiscal); // TODO: Implementar findRegimenFiscal
      //setRegimenFiscal(regimenFiscalDynamic ?? null);
    }
  }, [User]);

  // ACTUALIZAR INFORMACION DEL USUARIO ===============================================
  const [updateUser] = useMutation(UPDATE_USER);
  const [message, setMessage] = useState("");

  const handleUpdateUser = async () => {
    if (currentPassword || newPassword || confirmPassword) {
      if (!currentPassword) {
        setMessage("Por favor ingrese su contraseña actual"); //TODO: la contraseña actual se debe checar en el backend
        return;
      }
      if (newPassword !== confirmPassword) {
        setMessage("Las contraseñas no coinciden");
        return;
      }
      if (newPassword === currentPassword) {
        setMessage("La nueva contraseña no puede ser igual a la actual");
        return;
      }
    }

    setIsLoading(true);

    const input: {
      name?: string;
      lastname?: string;
      regimenFiscal?: string;
      newPassword?: string;
      oldPassword?: string;
    } = {};
    if (name && name !== User.name) input.name = name;
    if (surname && surname !== User.lastname) input.lastname = surname;
    if (regimenFiscal && regimenFiscal !== User.regimenFiscal)
      input.regimenFiscal = regimenFiscal;
    if (currentPassword) input.oldPassword = currentPassword;
    if (newPassword) input.newPassword = newPassword;

    try {
      const { data } = await updateUser({
        variables: { input },
      });
      if (data) {
        setIsEditing(false);
        setConfirmPassword("");
        setCurrentPassword("");
        setNewPassword("");
        setMessage("Perfil actualizado exitosamente");
        console.log(data);
        setIsLoading(false);
      }
    } catch (error) {
      setMessage("Error al actualizar el perfil");
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <View style={styles(activeColors).tabContent}>
      <ScrollView>
        <View style={styles(activeColors).columnMini}>
          <Text style={styles(activeColors).h6}>Configuración de Perfil</Text>
          <Pressable
            onPress={isEditing ? cancelEdit : toggleEdit}
            style={styles(activeColors).columnMini}
          >
            <MaterialCommunityIcons
              name={isEditing ? "close" : "pencil"}
              color={isEditing ? activeColors.danger : activeColors.text}
              size={24}
            ></MaterialCommunityIcons>

            <Text style={styles(activeColors).cancel}>
              {isEditing ? "Cancelar" : ""}
            </Text>
          </Pressable>
        </View>
        <View
          style={
            isMobile
              ? styles(activeColors).mobileColumn
              : styles(activeColors).columnMini
          }
        >
          <View>
            <View
              style={
                isMobile
                  ? styles(activeColors).mobileRow
                  : styles(activeColors).row
              }
            >
              <Text style={styles(activeColors).body}>Nombre</Text>
              <TextInput
                placeholder="Nombre"
                mode="outlined"
                value={name}
                outlineColor={activeColors.primary}
                activeOutlineColor={activeColors.primary}
                disabled={!isEditing}
                onChangeText={setName}
                editable={isEditing}
                style={
                  isMobile
                    ? { maxHeight: 50, minWidth: "90%" }
                    : { maxHeight: 50 }
                }
              ></TextInput>
            </View>
            <View
              style={
                isMobile
                  ? styles(activeColors).mobileRow
                  : styles(activeColors).row
              }
            >
              <Text style={styles(activeColors).body}>Apellido</Text>
              <TextInput
                placeholder="Apellido"
                mode="outlined"
                outlineColor={activeColors.primary}
                activeOutlineColor={activeColors.primary}
                value={surname}
                onChangeText={setSurname}
                editable={isEditing}
                disabled={!isEditing}
                style={
                  isMobile
                    ? { maxHeight: 50, minWidth: "90%" }
                    : { maxHeight: 50 }
                }
              ></TextInput>
            </View>
          </View>
          <View>
            <View
              style={
                isMobile
                  ? styles(activeColors).mobileRow
                  : styles(activeColors).row
              }
            >
              <Text style={styles(activeColors).body}>Correo Electrónico</Text>
              <Text style={styles(activeColors).body}>{User.email}</Text>
            </View>
            <View
              style={
                isMobile
                  ? styles(activeColors).mobileRow
                  : styles(activeColors).row
              }
            >
              <Text style={styles(activeColors).body}>Contraseña Actual</Text>
              <TextInput
                placeholder="Contraseña Actual"
                mode="outlined"
                outlineColor={activeColors.primary}
                activeOutlineColor={activeColors.primary}
                value={currentPassword}
                onChangeText={setCurrentPassword}
                editable={isEditing}
                disabled={!isEditing}
                secureTextEntry={secureTextOld}
                style={
                  isMobile
                    ? { maxHeight: 50, minWidth: "90%" }
                    : { maxHeight: 50 }
                }
                right={
                  isEditing! ? (
                    <TextInput.Icon
                      icon={secureTextOld ? "eye" : "eye-off"}
                      color={activeColors.textSecondary}
                      onPress={toggleSecureTextOld}
                    />
                  ) : null
                }
              ></TextInput>
            </View>
            {isEditing && (
              <>
                <View
                  style={
                    isMobile
                      ? styles(activeColors).mobileRow
                      : styles(activeColors).row
                  }
                >
                  <Text style={styles(activeColors).body}>
                    Nueva Contraseña
                  </Text>
                  <TextInput
                    mode="outlined"
                    placeholder="Nueva Contraseña"
                    outlineColor={activeColors.primary}
                    activeOutlineColor={activeColors.primary}
                    value={newPassword}
                    disabled={!isEditing}
                    onChangeText={setNewPassword}
                    secureTextEntry={secureText}
                    style={
                      isMobile
                        ? { maxHeight: 50, minWidth: "90%" }
                        : { maxHeight: 50 }
                    }
                    right={
                      <TextInput.Icon
                        icon={secureText ? "eye" : "eye-off"}
                        color={activeColors.text}
                        onPress={toggleSecureText}
                      />
                    }
                  />
                </View>

                <View
                  style={
                    isMobile
                      ? styles(activeColors).mobileRow
                      : styles(activeColors).row
                  }
                >
                  <Text style={styles(activeColors).body}>
                    Confirmar Contraseña
                  </Text>
                  <TextInput
                    mode="outlined"
                    placeholder="Confirmar Contraseña"
                    outlineColor={activeColors.primary}
                    activeOutlineColor={activeColors.primary}
                    value={confirmPassword}
                    disabled={!isEditing}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={secureTextConfirm}
                    style={
                      isMobile
                        ? { maxHeight: 50, minWidth: "90%" }
                        : { maxHeight: 50 }
                    }
                    right={
                      <TextInput.Icon
                        icon={secureTextConfirm ? "eye" : "eye-off"}
                        color={activeColors.text}
                        onPress={toggleSecureTextConfirm}
                      />
                    }
                  />
                </View>
              </>
            )}
            <View
              style={
                isMobile
                  ? styles(activeColors).mobileRow
                  : styles(activeColors).row
              }
            >
              <Text style={styles(activeColors).body}>Régimen Fiscal</Text>
              <View style={styles(activeColors).container}>
                {renderLabel()}
                <Dropdown
                  style={[
                    styles(activeColors).dropdown,
                    isFocus && { borderColor: activeColors.primary },
                    { maxWidth: 270 },
                  ]}
                  placeholderStyle={[
                    styles(activeColors).placeholderStyle,
                    !isEditing && { color: activeColors.textHint },
                  ]}
                  selectedTextStyle={[
                    styles(activeColors).selectedTextStyle,
                    !isEditing && { color: activeColors.textHint },
                  ]}
                  data={regimenesFiscales}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus ? "Selecciona una opción" : ""}
                  value={regimenFiscal}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  disable={!isEditing}
                  onChange={(item) => {
                    setRegimenFiscal(item.value);
                    setIsFocus(false);
                  }}
                />
              </View>
            </View>
          </View>
        </View>
        {isEditing ? (
          <View style={{ alignItems: "center" }}>
            <Text style={styles(activeColors).errorText}>{message}</Text>
            <PinkButton
              handlePress={() => {
                handleUpdateUser();
              }}
              title="Guardar Cambios"
              isLoading={isLoading}
            ></PinkButton>
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
};

const CREATE_REMINDER = gql`
  mutation CreateReminder($input: CreateReminderInput!) {
    createReminder(input: $input) {
      _id
      userId
      title
      description
      finishDate
      createdAt
      updatedAt
    }
  }
`;

const SecondTab = () => {
  const width = Dimensions.get("window").width;
  const isMobile = width < 900;

  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const activeColors = Colors[isDarkMode ? "dark" : "light"];

  // Notificaciones
  const [isPushOn, setIsPushOn] = React.useState(false);
  const onToggleSwitchPush = () => setIsPushOn(!isPushOn);

  const [isEmailOn, setIsEmailOn] = React.useState(false);
  const onToggleSwitchEmail = () => setIsEmailOn(!isEmailOn);

  // Modal Crear Recordatorio ==================================================
  const [isSmallModalVisible, setIsSmallModalVisible] = useState(false);

  const openSmallModal = () => setIsSmallModalVisible(true);
  const closeSmallModal = () => setIsSmallModalVisible(false);

  const [inputDate, setInputDate] = React.useState<Date | undefined>(
    new Date()
  );
  const [inputTitleReminder, setInputTitleReminder] = useState("");
  const [message, setMessage] = useState("");

  // Crear Recordatorio =========================================================
  const [createReminder] = useMutation(CREATE_REMINDER);
  const [isLoading, setIsLoading] = useState(false);

  const { data, loading, error, refetch } = useQuery(ME);
  const reminders = data.me.reminders;

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  const handleCreateReminder = async () => {
    if (inputDate == null || inputTitleReminder == "") {
      setMessage("Todos los campos son obligatorios");
      return;
    } else {
      setMessage("");
      setIsLoading(true);
      try {
        const { data } = await createReminder({
          variables: {
            input: {
              title: inputTitleReminder,
              finishDate: inputDate,
            },
          },
        });
        closeSmallModal();
        refetch();
        setIsLoading(false);
        setInputTitleReminder("");
      } catch (error: any) {
        setMessage(error.message);
        setIsLoading(false);
      }
    }
  };

  return (
    <View style={styles(activeColors).tabContent}>
      <ScrollView>
        <View
          style={[
            isMobile
              ? styles(activeColors).mobileColumn
              : styles(activeColors).columnMini,
            { justifyContent: "space-around" },
          ]}
        >
          <View>
            <View style={styles(activeColors).columnMini}>
              <Text style={styles(activeColors).h6}>Recordatorios</Text>
              <Pressable
                style={styles(activeColors).buttonAdd}
                onPress={openSmallModal}
              >
                <MaterialCommunityIcons
                  name="plus"
                  size={24}
                  color={activeColors.primary}
                />
                <Text
                  style={[
                    styles(activeColors).body,
                    styles(activeColors).primary,
                  ]}
                >
                  Agregar
                </Text>
              </Pressable>
            </View>
            <FlatList
              data={reminders.filter(
                (item: { finishDate: string | number | Date }) =>
                  new Date(item.finishDate) > new Date()
              )}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => (
                <ReminderItem
                  date={item.finishDate}
                  id={item._id}
                  title={item.title}
                ></ReminderItem>
              )}
            />
          </View>
          <View>
            <Text style={styles(activeColors).h6}>Notificaciones</Text>

            <View style={styles(activeColors).notis}>
              <Text style={styles(activeColors).body}>Notificaciones Push</Text>
              <Switch
                color={activeColors.primary}
                value={isPushOn}
                onValueChange={onToggleSwitchPush}
              />
            </View>
            <View style={styles(activeColors).notis}>
              <Text style={styles(activeColors).body}>
                Notificaciones por email
              </Text>
              <Switch
                color={activeColors.primary}
                value={isEmailOn}
                onValueChange={onToggleSwitchEmail}
              />
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Modal Pequeño CREAR RECORDATORIO*/}
      <Modal isVisible={isSmallModalVisible} onBackdropPress={closeSmallModal}>
        <View style={styles(activeColors).smallModalContainer}>
          <View style={styles(activeColors).row}>
            <Text style={styles(activeColors).smallModalTitle}>
              Agregar Recordatorio
            </Text>
            <Pressable
              style={styles(activeColors).modalButton}
              onPress={closeSmallModal}
            >
              <MaterialCommunityIcons
                name="close"
                size={24}
                color={activeColors.primary}
              ></MaterialCommunityIcons>
            </Pressable>
          </View>
          <View style={styles(activeColors).row}>
            <Text style={styles(activeColors).body}>Nombre</Text>
            <TextInput
              placeholder="Nombre"
              mode="outlined"
              onChangeText={(text) => setInputTitleReminder(text)}
              value={inputTitleReminder}
              outlineColor={activeColors.primary}
              activeOutlineColor={activeColors.primary}
              style={
                isMobile ? { maxHeight: 50, width: "70%" } : { maxHeight: 50 }
              }
            ></TextInput>
          </View>
          <View style={styles(activeColors).row}>
            <Text style={styles(activeColors).body}>Fecha</Text>
            <View
              style={{
                justifyContent: "center",
                flex: 1,
                alignItems: "center",
              }}
            >
              <DatePickerInput
                locale="es"
                validRange={{ startDate: new Date() }}
                label="Fecha"
                value={inputDate}
                onChange={(d) => setInputDate(d)}
                inputMode="end"
                style={{ width: 200 }}
                mode="outlined"
                outlineColor={activeColors.primary}
                activeOutlineColor={activeColors.primary}
              />
            </View>
          </View>
          <Text style={styles(activeColors).errorText}>{message}</Text>

          <Pressable
            style={styles(activeColors).pinkButton}
            onPress={() => {
              handleCreateReminder();
            }}
          >
            {isLoading ? (
              <ActivityIndicator size="small" color={activeColors.background} />
            ) : (
              <Text style={styles(activeColors).modalButtonText}>Guardar</Text>
            )}
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

const BOOKMARKS = gql`
  query GetAllFavoriteMessages(
    $orderBy: String!
    $limit: Int!
    $offset: Int!
    $desc: Boolean!
  ) {
    getAllFavoriteMessages(
      orderBy: $orderBy
      limit: $limit
      offset: $offset
      desc: $desc
    ) {
      items {
        _id
        chatId
        role
        content
        bookmark
        rated
        createdAt
        updatedAt
      }
      totalItemsCount
    }
  }
`;

const ThirdTab = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const activeColors = Colors[isDarkMode ? "dark" : "light"];

  // Bookmarks ===============================================================
  const { data, loading, error, refetch } = useQuery(BOOKMARKS, {
    variables: {
      orderBy: "createdAt",
      limit: 100,
      offset: 0,
      desc: true,
    },
  });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  const bookmarks = data.getAllFavoriteMessages.items;
  refetch();

  return (
    <View style={styles(activeColors).tabContent}>
      <FlatList
        data={bookmarks}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <IaMessageBookmark
            message={item.content}
            id={item._id}
          ></IaMessageBookmark>
        )}
      />
    </View>
  );
};

interface ModalWithTabsProps {
  isVisible: boolean;
  onClose: () => void;
  userInfo: any;
}

const ModalWithTabs: React.FC<ModalWithTabsProps> = ({
  isVisible,
  onClose,
  userInfo,
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

  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const activeColors = Colors[isDarkMode ? "dark" : "light"];

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      style={[
        styles(activeColors).modal,
        {
          maxWidth: isMobile ? "100%" : 1000,
          width: isMobile ? "100%" : "90%",
        },
      ]}
    >
      <View style={styles(activeColors).modalContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles(activeColors).modalTitle}> Configuración</Text>
          <Pressable style={styles(activeColors).modalButton} onPress={onClose}>
            <MaterialCommunityIcons
              name="close"
              size={32}
              color={activeColors.primary}
            ></MaterialCommunityIcons>
          </Pressable>
        </View>

        {/* Tabs */}
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={(props) => (
            <TabBar
              style={{ backgroundColor: activeColors.background }}
              activeColor={activeColors.secondary}
              inactiveColor={activeColors.text}
              labelStyle={{
                fontFamily: "Poppins-Regular",
                textTransform: "capitalize",
              }}
              indicatorStyle={{ backgroundColor: activeColors.secondary }}
              {...props}
            />
          )}
        />
      </View>
    </Modal>
  );
};

const styles = (activeColors: any) =>
  StyleSheet.create({
    modal: {
      justifyContent: "center",
      alignSelf: "center", // Centrar modal en pantallas grandes
      padding: 20,
    },
    modalContainer: {
      alignContent: "center",
      flex: 1,
      backgroundColor: activeColors.background,
      borderRadius: 10,
      padding: 20,
    },
    modalTitle: {
      fontSize: 34,
      fontFamily: "Poppins-Regular",
      color: activeColors.text,
      textAlign: "left",
      marginBottom: 20, // Espacio entre el título y las pestañas
    },
    tabContent: {
      flex: 1,
      padding: 20,
    },
    column: {
      flexDirection: "row",
      gap: 50,
    },
    columnMini: {
      flexDirection: "row",
      gap: 20,
      //alignItems: "center",
    },
    mobileColumn: {
      flexDirection: "column",
      gap: 20,
      //verticalAlign: "middle",
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
      borderColor: activeColors.divider,
    },
    h6: {
      fontSize: 18,
      fontFamily: "Poppins-Bold",
      color: activeColors.text,
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
      color: activeColors.text,
    },
    primary: {
      color: activeColors.primary,
    },
    container: {
      backgroundColor: activeColors.background,
      fontFamily: "Poppins-Regular",
    },
    dropdown: {
      minWidth: 230,
      height: 50,
      borderColor: activeColors.divider,
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
      fontFamily: "Poppins-Regular",
    },
    label: {
      color: Colors.light.divider,
      fontFamily: "Poppins-Regular",
      position: "absolute",
      backgroundColor: activeColors.background,
      left: 15,
      top: -8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
      fontFamily: "Poppins-Regular",
      color: activeColors.textHint,
    },
    selectedTextStyle: {
      fontSize: 16,
      color: activeColors.text,
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
      marginTop: 20,
    },
    cancel: {
      color: Colors.light.danger,
      fontFamily: "Poppins-Regular",
    },
    errorText: {
      marginTop: 10,
      marginHorizontal: 20,
      color: activeColors.danger,
      fontFamily: "Poppins-Regular",
      fontSize: 16,
      textAlign: "center",
    },
  });

export default ModalWithTabs;
