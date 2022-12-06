import { useNavigation, useTheme } from "@react-navigation/native";
import { SCREENS } from "@shared-constants";
import { getAllStory } from "api/apiStory";
import { useEffect, useMemo, useState } from "react";
import { ImageBackground, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import createStyles from "./SliderItem.style";


export default function SliderItem() {
  const theme = useTheme();
  const navigation = useNavigation();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      caption: "Looking at the stars in the sky. I realized the magic of the constellations",
      url: "https://res.cloudinary.com/hankiendev/image/upload/v1670378485/Nonogram/Story_1_mewfwo.jpg"
    },
    {
      id: 2,
      caption: "I followed the stars and all of a sudden, I was surprised to see a strange tree",
      url: "https://res.cloudinary.com/hankiendev/image/upload/v1670378484/Nonogram/Story_2_mb7ue8.jpg"
    },
    {
      id: 3,
      caption: "...found a tree with star shape. The way we have to go is very dark. We need the light from this strange tree.",
      url: "https://res.cloudinary.com/hankiendev/image/upload/v1670378487/Nonogram/Story3_rs6cbs.jpg"
    }
  ]);
  const [position, setPosition] = useState<number>(0);
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
    if (position === 2) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [position]);

  const _handleStartGame = () => {
    navigation.navigate(SCREENS.LEVELS);
  };
  return (
    <View style={styles.container}>
      {dataSource && dataSource.length > 0 && (
        <>
          <ImageBackground
            source={{ uri: dataSource[position].url }}
            style={position < 2 ? styles.imageBackground : styles.imageFull}
          />
          {position < 2 ? (
            <View>
              <Text style={styles.textCaption}>{dataSource[position].caption}</Text>
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
