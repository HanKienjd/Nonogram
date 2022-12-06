import { ExtendedTheme } from "@react-navigation/native";
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

interface Style {
  container: ViewStyle;
  image: ImageStyle;
  title: TextStyle;
  subtitle: TextStyle;
  subtitleButtonStart: TextStyle;
  buttonStart: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      flex: 1,
      width: "100%",
      backgroundColor: colors.background,
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      paddingTop: "20%",
    },
    title: {
      textAlign: "center",
      fontSize: 48,
      fontWeight: "bold",
      color: "white",
      fontFamily: "Montserrat-Italic",
      marginHorizontal: 10,
    },
    subtitle: {
      textAlign: "center",
      fontSize: 20,
      fontWeight: "bold",
      color: "white",
      opacity: 0.8,
    },
    subtitleButtonStart: {
      fontSize: 20,
      fontWeight: "bold",
      color: "white",
      zIndex: 99,
    },
    buttonStart: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
      paddingBottom: "40%",
    },
    
  });
};
