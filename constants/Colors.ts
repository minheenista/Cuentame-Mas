/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#fcbcb8";
const tintColorDark = "#fff";

const primary = "#F09D99";
const primaryLight = "#FCBCB8";
const secondary = "#A8DFEF";
const secondaryDark = "#7EC9E0";
const background = "#EDF0F3";
const surface = "#FFF";
const success = "#A7E8BD";
const warning = "#FFD972";
const danger = "#E75252";
const onError = "#FFFFFF";
const onPrimary = "#FFFFFF";
const onSecondary = "#FFFFFF";
const onBackground = "#292929";
const onSurface = "#292929";
const textPrimary = "#292929";
const textSecondary = "#575757";
const textHint = "#959595";
const divider = "#C6C6C6";
const shadow = "#44FFFFFF";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#F09d99",
    tabIconDefault: "#F09d99",
    tabIconSelected: tintColorLight,
    primary,
    primaryLight,
    secondary,
    secondaryDark,
    onBackground,
    onPrimary,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#fcbcb8",
    tabIconDefault: "#fcbcb8",
    tabIconSelected: tintColorDark,
  },
};
