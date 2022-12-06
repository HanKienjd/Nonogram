import { ViewStyle, StyleSheet, TextStyle, ImageStyle } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";
import { ScreenWidth } from "@freakycoder/react-native-helpers";

interface Style {
  container: ViewStyle;
  titleTextStyle: TextStyle;
  buttonStyle: ViewStyle;
  buttonTextStyle: TextStyle;
  header: ViewStyle;
  contentContainer: ViewStyle;
  listContainer: ViewStyle;
  iconImageStyle: ImageStyle;
  centeredView: ViewStyle;
  modalView: ViewStyle;
  modalText: TextStyle;
  btnRowStyle: ViewStyle;
  btn: ViewStyle;
  containerButton: ViewStyle;
  containerRowButton: ViewStyle;
  
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: colors.background,
    },
    titleTextStyle: {
      fontSize: 32,
    },
    buttonStyle: {
      height: 45,
      width: ScreenWidth * 0.9,
      marginTop: 32,
      borderRadius: 12,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.primary,
      shadowRadius: 5,
      shadowOpacity: 0.7,
      shadowColor: colors.shadow,
      shadowOffset: {
        width: 0,
        height: 3,
      },
    },
    buttonTextStyle: {
      color: colors.white,
      fontWeight: "700",
    },
    header: {
      width: ScreenWidth * 0.8,
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "space-between",
      marginLeft: "auto",
      marginRight: "auto",
    },
    contentContainer: {
      flex: 1,
      marginTop: 16,
    },
    listContainer: {
      marginTop: 8,
    },
    iconImageStyle: {
      height: 40,
      width: 40,
      borderRadius: 30,
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
      backgroundColor: "rgba(105, 104, 121, 0.9)",
    },
    modalView: {
      margin: 20,
      backgroundColor: "rgba(105, 104, 121, 0.9)",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    modalText: {
      color: colors.white,
      fontSize: 32,
      fontWeight: "400",
      alignItems: "center",
      textAlign: "center",
      marginRight: 30,
      // width: "90%"
    },
    btnRowStyle: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
    },

    btn: {
    backgroundColor: '#A7A9E8',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    },
    containerButton: {
      width: "100%",
    },
    containerRowButton: {
      width: "50%",
    }

  });
};
