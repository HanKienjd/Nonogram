import { useNavigation, useTheme } from "@react-navigation/native";
import { SCREENS } from "@shared-constants";
import { useMemo } from "react";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import createStyles from "./HomeScreen.style";

export default function Welcome() {
  const navigation = useNavigation();
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const _handleSwitchScreen = () => {
    console.log("Switch screen");
    navigation.navigate(SCREENS.STORY);
  };

  const _handleNextListView = () => {
    navigation.navigate(SCREENS.LEVELS);
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("assets/background_welcome.png")}
        style={styles.image}
      >
        <Text style={styles.title}>The Moon</Text>
        <Text style={styles.subtitle}>Nonogram</Text>
        <TouchableOpacity
          onPress={_handleSwitchScreen}
          style={styles.buttonStart}
        >
          <Text style={styles.subtitleButtonStart}>Click</Text>
        </TouchableOpacity>
        <Button onPress={_handleNextListView} title="List View" />
      </ImageBackground>
    </View>
  );
}
