import { ScreenWidth } from "@freakycoder/react-native-helpers";
import { ExtendedTheme } from "@react-navigation/native";
import { ViewStyle, StyleSheet, ImageStyle, TextStyle } from "react-native";

interface Style {
  container: ViewStyle;
  imageBackground: ImageStyle;
  btnStart: ViewStyle;
  textStart: ViewStyle;
  imageFull: ImageStyle;
  textCaption: TextStyle
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
    imageFull: {
      position: "absolute",
      width: ScreenWidth,
      height: "100%",
      resizeMode: "cover",
    },
    textCaption: {
      padding: 10,
      color: colors.white,
    },
    btnStart: {
      marginLeft: "auto",
      marginRight: "auto",
      left: 0,
      right: 0,
      textAlign: "center",

    },
    textStart: {
      fontWeight: "bold",
      fontSize: 20,
      textAlign: "center",
      color: colors.white,
    },
  });
};
