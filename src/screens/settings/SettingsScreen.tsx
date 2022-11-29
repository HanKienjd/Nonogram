import { View, Button } from "react-native";
import { Header } from "@shared-components/layout/Header";
interface SettingScreenProps {}

export const SettingScreen: React.FC<SettingScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Header />
      Setting Screens
    </View>
  );
};
