import { ScreenWidth } from "@freakycoder/react-native-helpers";
import { ExtendedTheme } from "@react-navigation/native";
import { ViewStyle, StyleSheet, ImageStyle } from "react-native";

interface Style {
  container: ViewStyle;
  imageBackground: ImageStyle;
  containerCaption: ViewStyle;
  btnStart: ViewStyle;
  textStart: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      backgroundColor: colors.background,
    },
    imageBackground: {
      width: ScreenWidth,
      height: "60%",
      resizeMode: "cover",
    },
    containerCaption: {},
    btnStart: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    textStart: {
      fontWeight: "bold",
      fontSize: 20,
      textAlign: "center",
    },
  });
};
