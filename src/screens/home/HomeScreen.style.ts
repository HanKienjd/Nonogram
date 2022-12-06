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
  profilePicImageStyle: ImageStyle;
  image: ImageStyle;
  title: TextStyle;
  subtitle: TextStyle;
  subtitleButtonStart: TextStyle;
  buttonStart: ViewStyle;
  textStory: TextStyle;
  textStoryBelow: TextStyle;
  containerStoryBelow: ViewStyle;
  titlePage: ViewStyle;
  textPage: TextStyle;
  containerListLevel: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      flex: 1,
      width: "100%",
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
      width: ScreenWidth * 0.9,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    contentContainer: {
      flex: 1,
      marginTop: 16,
    },
    listContainer: {
      marginTop: 8,
    },
    profilePicImageStyle: {
      height: 50,
      width: 50,
      borderRadius: 30,
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "flex-start",
      alignItems: "center",
      paddingTop: "20%",
    },
    title: {
      fontSize: 48,
      fontWeight: "bold",
      color: "white",
      fontFamily: "Montserrat-Italic",
      marginHorizontal: 10,
    },
    subtitle: {
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
    textStory: {
      fontSize: 16,
      textAlign: "center",
      width: "70%",
      lineHeight: 30,
      fontWeight: "500",
    },
    containerStoryBelow: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
      width: "70%",
      lineHeight: 30,
      paddingBottom: "40%",
    },
    textStoryBelow: {
      fontSize: 16,
      textAlign: "center",
      lineHeight: 30,
      fontWeight: "500",
    },
    //List Page
    titlePage: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    textPage: {
      fontSize: 32,
      fontWeight: "bold",
      lineHeight: 40,
    },
    containerListLevel: {
      borderRadius: 14,
      borderWidth: 1,
      borderColor: colors.primary,
      padding: 10,
      shadowColor: colors.shadow,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
    },
  });
};
