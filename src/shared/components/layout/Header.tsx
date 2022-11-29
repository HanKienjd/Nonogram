import RNBounceable from "@freakycoder/react-native-bounceable";
import { useNavigation, useTheme } from "@react-navigation/native";
import { SCREENS } from "@shared-constants";
import React, { useMemo } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import createStyles from "./style";
interface HeaderComponentProps {}

export const Header: React.FC<HeaderComponentProps> = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const navigation = useNavigation();
  const MenuButton = () => (
    <RNBounceable>
      <TouchableOpacity onPress={() => navigation.navigate(SCREENS.HOME)}>
        <Image
          source={require("../../../assets/icon/menu.png")}
          style={styles.iconImageStyle}
        />
      </TouchableOpacity>
    </RNBounceable>
  );

  const BackButton = () => (
    <Image
      source={require("@assets/icon/back.png")}
      style={styles.iconImageStyle}
    />
  );

  return (
    <View style={styles.header}>
      <BackButton />
      <MenuButton />
    </View>
  );
};
