import { ExtendedTheme } from "@react-navigation/native";
import { StyleSheet, ViewStyle } from "react-native";

interface Style {
  container: ViewStyle;
  containerHeader: ViewStyle;
  titlePage: ViewStyle;
  containerListLevel: ViewStyle;
  textPage: TextStyle;
  imageLevel: ImageStyle;
  containerItemLevel: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      flex: 1,
      width: "100%",
    },
    containerHeader: {
      marginTop: "20%",
      flex: 1,
    },
    titlePage: {
      alignItems: "center",
      textAlign: "center",
      flex: 1,
      justifyContent: "center",
    },
    textPage: {
      fontSize: 32,
      fontWeight: "bold",
    },
    containerListLevel: {
      flex: 1,
      borderRadius: 15,
      backgroundColor: "#696879",
      // padding: 10,
      margin: 20,
    },
    imageLevel: {
      width: 100,
      height: 100,
    },
    containerItemLevel: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  });
};
