import { Stack, Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function GuestLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack>
      <Stack.Screen name="guest" />
    </Stack>
  );
}
