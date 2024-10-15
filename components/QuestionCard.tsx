import { Colors } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Modal,
  Alert,
  StyleSheet,
  Pressable,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";

interface QuestionCardProps {
  question: string;
  answer: string;
}

const QuestionCard = ({ question, answer }: QuestionCardProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { width } = Dimensions.get("window");

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => setModalVisible(!modalVisible)}
        >
          <View style={styles.centeredView}>
            <TouchableWithoutFeedback onPress={() => {}}>
              <View
                style={width > 400 ? styles.modalView : styles.modalViewMobile}
              >
                <View style={styles.cardHeader}>
                  <Text style={styles.modalTitle}>{question}</Text>
                  <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <MaterialIcons
                      name="close"
                      color={Colors.light.primary}
                      size={24}
                      /*                       style={width > 600 ? { right: -80 } : { right: -10 }}
                       */
                    ></MaterialIcons>
                  </TouchableOpacity>
                </View>
                <Text style={styles.modalText}>{answer}</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* ============= Card Question ==================== */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => setModalVisible(true)}
      >
        <View style={styles.cardContent}>
          <Text style={styles.textCard}>{question}</Text>
          <MaterialIcons
            name="chevron-right"
            color={Colors.light.primary}
            size={24}
            style={{ alignSelf: "center" }}
          ></MaterialIcons>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 84,
    width: 360,
    borderRadius: 10,
    shadowColor: "#49494986",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 2,
    backgroundColor: "#0000000A",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 0,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 25,
    paddingBottom: 0,
  },
  textCard: {
    fontSize: 16,
    marginRight: 20,
    color: Colors.light.text,
    fontFamily: "Poppins-Regular",
    fontWeight: "400",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "##da0505",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 40,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    maxWidth: 640,
  },
  modalViewMobile: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 40,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    maxWidth: "90%",
  },

  modalTitle: {
    fontSize: 20,
    textAlign: "center",
    marginRight: 20,
    color: Colors.light.primary,
    fontFamily: "Poppins-Bold",
  },
  modalText: {
    maxWidth: "80%",
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 16,
    color: Colors.light.text,
    fontFamily: "Poppins-Regular",
  },
});

export default QuestionCard;
