import { useNavigation, useTheme } from "@react-navigation/native";
import { SCREENS } from "@shared-constants";
import React, { useEffect, useMemo } from "react";
import { ImageBackground, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import createStyles from "./HomeScreen.style";
import Sound from 'react-native-sound';

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const navigation = useNavigation();

  const _handleSwitchScreen = () => {
    navigation.navigate(SCREENS.STORY);
  };

  const sound = new Sound('assets/HeavyRain.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    Sound.setCategory('Playback');
  });

  useEffect(() => {
    sound.play();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
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
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomeScreen;
