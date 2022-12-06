import { useTheme } from "@react-navigation/native";
import React, { useMemo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import createStyles from "./HomeScreen.style";
import Welcome from "./Welcome";
interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <SafeAreaView style={styles.container}>
      <Welcome />
    </SafeAreaView>
  );
};

export default HomeScreen;
