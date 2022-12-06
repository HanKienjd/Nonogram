import { useTheme } from "@react-navigation/native";
import { Header } from "@shared-components/layout/Header";
import { useMemo, useRef, useState } from "react";
import { ImageBackground, Text, View } from "react-native";
import { WebView } from "react-native-webview";
import createStyles from "./ListLevel.style";

export default function LevelsScreen() {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const [url, setUrl] = useState("https://jokude.github.io/react-nonogram/#/category/5x5");
  const webviewRef = useRef(null);
  const onBack = () => {
    webviewRef.current.goBack()
  }
  return (
    <ImageBackground
      source={require("@assets/background_home.jpg")}
      style={styles.container}
    >
      <View style={styles.containerHeader}>
        <Header onBack={onBack} />
      </View>
      <View style={styles.titlePage}>
        <Text style={styles.textPage}>Play List</Text>
      </View>
      <View style={styles.containerListLevel}>
        <WebView source={{ uri: url }} ref={webviewRef}/>
      </View>
    </ImageBackground>
  );
}
