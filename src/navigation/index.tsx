import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { useColorScheme } from "react-native";
import { isReadyRef, navigationRef } from "react-navigation-helpers";
/**
 * ? Local & Shared Imports
 */
import { SCREENS } from "@shared-constants";
import { DarkTheme, LightTheme } from "@theme/themes";
// ? Screens
import DetailScreen from "@screens/detail/DetailScreen";
import HomeScreen from "@screens/home/HomeScreen";
import LevelGrid from "@screens/home/list-level/LevelGrid";
import StoryGame from "@screens/home/StoryGame";

// ? If you want to use stack or tab or both
const Stack = createStackNavigator();

const Navigation = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === "dark";

  React.useEffect((): any => {
    return () => (isReadyRef.current = false);
  }, []);
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
      theme={isDarkMode ? DarkTheme : LightTheme}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={SCREENS.HOME} component={HomeScreen} />
        <Stack.Screen name={SCREENS.STORY} component={StoryGame} />
        <Stack.Screen name={SCREENS.LEVELS} component={LevelGrid} />
        <Stack.Screen name={SCREENS.DETAIL}>
          {(props) => <DetailScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
