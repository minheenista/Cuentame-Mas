import { Colors } from "@/constants/Colors";
import { gql, useMutation, useQuery } from "@apollo/client";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  useColorScheme,
  Dimensions,
} from "react-native";
import Modal from "react-native-modal";
import { TextInput } from "react-native-paper";
import { DatePickerInput } from "react-native-paper-dates";
import { registerTranslation } from "react-native-paper-dates";
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

const UPDATE_REMINDER = gql`
  mutation UpdateReminder($input: UpdateReminderInput!) {
    updateReminder(input: $input) {
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

const DELETE_REMINDER = gql`
  mutation DeleteReminder($id: String!) {
    deleteReminder(id: $id) {
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

export const ReminderItem = ({
  id,
  title,
  date,
}: {
  id: any;
  title: any;
  date: any;
}) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const activeColors = Colors[isDarkMode ? "dark" : "light"];

  const width = Dimensions.get("window").width;
  const isMobile = width < 900;

  // Modal Editar Recordatorio
  const [isSmallModalVisibleEdit, setIsSmallModalVisibleEdit] = useState(false);

  const openSmallModalEdit = () => setIsSmallModalVisibleEdit(true);
  const closeSmallModalEdit = () => setIsSmallModalVisibleEdit(false);

  const [inputTitleReminderEdit, setInputTitleReminderEdit] = useState("");
  const [message, setMessage] = useState("");
  const [inputDateEdit, setInputDateEdit] = React.useState<Date | undefined>(
    new Date()
  );

  // Modal Eliminar Recordatorio
  const [isSmallModalVisibleDelete, setIsSmallModalVisibleDelete] =
    useState(false);

  const openSmallModalDelete = () => setIsSmallModalVisibleDelete(true);
  const closeSmallModalDelete = () => setIsSmallModalVisibleDelete(false);

  // Obtener Recordatorios
  const { data, loading, error, refetch } = useQuery(ME);

  // Editar Recordatorio
  const [updateReminder] = useMutation(UPDATE_REMINDER);

  useEffect(() => {
    if (title) {
      setInputTitleReminderEdit(title);
      setInputDateEdit(new Date(date));
    }
  }, [title]);

  const handleEditReminder = async () => {
    if (inputTitleReminderEdit === "") {
      setMessage("El nombre del recordatorio es obligatorio");
      return;
    }

    try {
      const { data } = await updateReminder({
        variables: {
          input: {
            id: id,
            title: inputTitleReminderEdit,
            finishDate: inputDateEdit,
          },
        },
      });
      if (data) {
        closeSmallModalEdit();
        refetch();
      }
    } catch (error) {
      setMessage("Error al editar el recordatorio");
    }
  };

  // Eliminar Recordatorio
  const [deleteReminder] = useMutation(DELETE_REMINDER);

  const handleDeleteReminder = async (id: any) => {
    try {
      const { data } = await deleteReminder({
        variables: { id },
      });
      if (data) {
        closeSmallModalDelete();
        refetch();
      }
    } catch (error) {}
  };

  return (
    <View style={styles(activeColors).container}>
      <View style={styles(activeColors).reminderItem}>
        <Text style={styles(activeColors).body}>{title}</Text>
        <View style={styles(activeColors).buttons}>
          <Pressable
            onPress={() => {
              openSmallModalEdit();
            }}
          >
            <MaterialCommunityIcons
              name="pencil"
              size={24}
              color={activeColors.warning}
            />
          </Pressable>
          <Pressable
            onPress={() => {
              openSmallModalDelete();
            }}
          >
            <MaterialCommunityIcons
              name="delete"
              size={24}
              color={activeColors.danger}
            />
          </Pressable>
        </View>
      </View>
      <Text style={[styles(activeColors).body, styles(activeColors).grayText]}>
        {new Date(date).toLocaleDateString("es-ES", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })}
      </Text>

      {/* MODAL EDITAR RECORDATORIO */}
      <Modal
        isVisible={isSmallModalVisibleEdit}
        onBackdropPress={closeSmallModalEdit}
      >
        <View style={styles(activeColors).smallModalContainer}>
          <View style={styles(activeColors).row}>
            <Text style={styles(activeColors).smallModalTitle}>
              Editar Recordatorio
            </Text>
            <Pressable
              style={styles(activeColors).modalButton}
              onPress={closeSmallModalEdit}
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
              onChangeText={(text) => setInputTitleReminderEdit(text)}
              value={inputTitleReminderEdit}
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
                value={inputDateEdit}
                onChange={(d) => setInputDateEdit(d)}
                inputMode="end"
                style={{ width: 200 }}
                mode="outlined"
                outlineColor={activeColors.primary}
                activeOutlineColor={activeColors.primary}
              />
            </View>
          </View>
          <Text style={styles(activeColors).errorText}>{message}</Text>

          <View style={styles(activeColors).row}>
            <Pressable
              style={styles(activeColors).cancelButton}
              onPress={() => {
                closeSmallModalEdit();
              }}
            >
              <Text style={styles(activeColors).modalButtonText}>Cancelar</Text>
            </Pressable>
            <Pressable
              style={styles(activeColors).pinkButton}
              onPress={() => {
                handleEditReminder();
              }}
            >
              <Text style={styles(activeColors).modalButtonText}>Guardar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Modal Delete Reminder */}
      <Modal
        isVisible={isSmallModalVisibleDelete}
        onBackdropPress={closeSmallModalDelete}
      >
        <View style={styles(activeColors).smallModalContainer}>
          <View style={styles(activeColors).row}>
            <Text style={styles(activeColors).smallModalTitle}>
              Eliminar Recordatorio
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
              ¿Estás seguro de eliminar este recordatorio?
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
                handleDeleteReminder(id);
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

export default ReminderItem;

const styles = (activeColors: any) =>
  StyleSheet.create({
    container: {
      justifyContent: "space-between",
      padding: 10,
      margin: 10,
    },
    reminderItem: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    buttons: {
      flexDirection: "row",
    },
    body: {
      fontFamily: "Poppins-Regular",
      fontSize: 16,
      color: activeColors.text,
    },
    grayText: {
      color: activeColors.textHint,
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
    row: {
      gap: 20,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 10,
    },
  });
