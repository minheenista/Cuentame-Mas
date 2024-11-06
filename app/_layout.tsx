import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { Audio } from "expo-av";
import { requestPermissionsAsync } from "expo-av/build/Audio";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Dimensions } from "react-native";
import { ApolloProvider } from "@apollo/client";
import client from "@/config/apollo";
import { PaperProvider } from "react-native-paper";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { width } = Dimensions.get("window");

  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    "Poppins-Black": require("./../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      const getPermission = async () => {
        const audioStatus = await Audio.requestPermissionsAsync();
        const recordingStatus = await requestPermissionsAsync();
        if (
          audioStatus.status !== "granted" ||
          recordingStatus.status !== "granted"
        ) {
          alert("Se necesita permiso para usar el micrófono.");
        }
      };
      getPermission();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  /*   useEffect(() => {
    const getPermission = async () => {
      const audioStatus = await Audio.requestPermissionsAsync();
      const recordingStatus = await requestPermissionsAsync();
      if (
        audioStatus.status !== "granted" ||
        recordingStatus.status !== "granted"
      ) {
        alert("Se necesita permiso para usar el micrófono.");
      }
    };
    getPermission();
  }, []);
 */
  return (
    <ApolloProvider client={client}>
      <PaperProvider>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(home)" />
            <Stack.Screen name="(auth)" />
            <Stack.Screen name="(guest)" />
            <Stack.Screen name="(user)" />
            <Stack.Screen name="+not-found" />
          </Stack>
        </ThemeProvider>
      </PaperProvider>
    </ApolloProvider>
  );
}
