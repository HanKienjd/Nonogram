import { useEffect, useMemo, useState } from "react";
import Slideshow from "react-native-image-slider-show";
import { useNavigation, useTheme } from "@react-navigation/native";
import { getAllStory } from "api/apiStory";
import { ImageBackground, Text, View } from "react-native";
import createStyles from "./SliderItem.style";
import { TouchableOpacity } from "react-native-gesture-handler";
import { navigationListenerProps } from "react-navigation-helpers";

export default function SliderItem() {
  const theme = useTheme();
  const navigation = useNavigation();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const [dataSource, setDataSource] = useState([]);
  const [position, setPosition] = useState<number>(0);
  const fetchSlider = async () => {
    const { data } = await getAllStory();
    setDataSource(data);
  };
  useEffect(() => {
    fetchSlider();
  }, []);

  const coutDown = () => {
    if (position === dataSource.length - 1) {
      setPosition(0);
    } else {
      setPosition(position + 1);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      coutDown();
    }, 3000);
    if (position === 3) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [position]);

  const _handleStartGame = () => {
    navigation.navigate("ListLevel");
    console.log("Start Game");
  };
  return (
    <View style={styles.container}>
      {dataSource && dataSource.length > 0 && (
        <>
          <ImageBackground
            source={{ uri: dataSource[position].url }}
            style={styles.imageBackground}
          />
          {position < 3 ? (
            <View style={styles.containerCaption}>
              <Text>{dataSource[position].caption}</Text>
            </View>
          ) : (
            <TouchableOpacity
              onPress={() => _handleStartGame()}
              style={styles.btnStart}
            >
              <Text style={styles.textStart}>Click to Start</Text>
            </TouchableOpacity>
          )}
        </>
      )}
    </View>
  );
}
