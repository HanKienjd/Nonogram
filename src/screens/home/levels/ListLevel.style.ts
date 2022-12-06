import { ExtendedTheme } from "@react-navigation/native";
import { StyleSheet, ViewStyle } from "react-native";

interface Style {
  container: ViewStyle;
  containerHeader: ViewStyle;
  titlePage: ViewStyle;
  containerListLevel: ViewStyle;
  containerItemLevel: ViewStyle;
  textPage: TextStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      flex: 1,
      width: "100%",
    },
    containerHeader: {
      marginTop: "10%",
    },
    titlePage: {
      marginTop: 20,
      alignItems: "center",
    },
    textPage: {
      color: colors.white,
      fontSize: 20,
      fontWeight: "bold",
    },
    containerListLevel: {
      flex: 1,
      borderRadius: 15,
      backgroundColor: "#696879",
      margin: 20,
    },
    containerItemLevel: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  });
};
