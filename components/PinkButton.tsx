import { Colors } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";

import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

interface PinkButtonProps {
  title: string;
  handlePress: () => void;
  isLoading: boolean;
}

const PinkButton = ({ title, handlePress, isLoading }: PinkButtonProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLoading}
      style={[Styles.roundBlackButton]}
    >
      <Text style={[Styles.whiteText]}>{title}</Text>
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
  roundBlackButton: {
    backgroundColor: Colors.light.primary,
    paddingHorizontal: 15,
    paddingVertical: 6,
    textAlign: "center",
    borderRadius: 20,
    marginHorizontal: 10,
  },

  whiteText: {
    color: Colors.light.onPrimary,
    fontFamily: "Poppins-Regular",
    paddingHorizontal: 10,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.1,
  },
});

export default PinkButton;
