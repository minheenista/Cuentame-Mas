import { Colors } from "@/constants/Colors";
import { useFonts } from "@/hooks/useFonts";

import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";

interface OutlinedBlackButtonProps {
  title: string;
  handlePress: () => void;
  isLoading: boolean;
}

const OutlinedBlackButton = ({
  title,
  handlePress,
  isLoading,
}: OutlinedBlackButtonProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLoading}
      style={[Styles.outlinedBlackButton]}
    >
      <Text style={[Styles.blackText]}>{title}</Text>
      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          style={{ marginLeft: 10 }}
        />
      )}
    </TouchableOpacity>
  );
};

export const Styles = StyleSheet.create({
  outlinedBlackButton: {
    backgroundColor: "transparent",
    paddingHorizontal: 10,
    paddingVertical: 5,
    textAlign: "center",
    borderRadius: 5,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: Colors.light.onBackground,
  },

  blackText: {
    fontSize: 16,
    color: Colors.light.onBackground,
    fontFamily: "Poppins-Regular",
    paddingHorizontal: 10,
    lineHeight: 24,
  },
});

export default OutlinedBlackButton;
