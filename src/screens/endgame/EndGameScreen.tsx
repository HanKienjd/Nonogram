import { useNavigation, useTheme } from "@react-navigation/native";
import { useEffect, useMemo, useState } from "react";
import { ImageBackground, Text, View } from "react-native";
import createStyles from "./EndGame.style";


export default function EndGameScreen  () {

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      caption: "Now we have this tree",
      url: "https://res.cloudinary.com/hankiendev/image/upload/v1670378487/Nonogram/Story3_rs6cbs.jpg"
    },
    {
      id: 2,
      caption: "The stars are heading towards us and getting into the jar.",
      url: "https://res.cloudinary.com/hankiendev/image/upload/v1671702477/Nonogram/Rectangle_25_frolb8.jpg"
    },
    {
      id: 3,
      caption: "They are trying to turn the jar into a lamp.We need more stars.",
      url: "https://res.cloudinary.com/hankiendev/image/upload/v1670378487/Nonogram/Story7_zzzxq5.jpg"
    },
    {
      id: 4,
      caption: "The lamp is gradually being completed. Wait!! There’s a gift from the stars.",
      url: "https://res.cloudinary.com/hankiendev/image/upload/v1670378487/Nonogram/Story7_zzzxq5.jpg"
    },
    {
      id: 5,
      caption: "is a music box in the shape of the moon",
      url: "https://res.cloudinary.com/hankiendev/image/upload/v1670378486/Nonogram/Story9_qsojrr.jpg"
    },
    {
      id: 6,
      caption: "Is it guiding us in the direction of the moon? The only thing among the stars.",
      url: "https://res.cloudinary.com/hankiendev/image/upload/v1670378485/Nonogram/Story10_ncg2ek.jpg"
    },
    {
      id: 7,
      caption: "Follow the moon, the sky gradually brightens. And when out of the forest....",
      url: "https://res.cloudinary.com/hankiendev/image/upload/v1670378485/Nonogram/Story11_vhjonn.jpg"
    },
    {
      id: 8,
      caption: "...I find the land in the clouds that I was looking for.",
      url: "https://res.cloudinary.com/hankiendev/image/upload/v1670378486/Nonogram/Story12_rz8ahz.jpg"
    }

  ]);
  const [position, setPosition] = useState<number>(1);
  const coutDown = () => {
    if (position === dataSource.length - 1) {
      setPosition(1);
    } else {
      setPosition(position + 1);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      coutDown();
    }, 3000);
    if (position === 7) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [position]);


  return (
    <View style={styles.container}>
      {dataSource && dataSource.length > 0 && (
        <>
          <ImageBackground
            source={{ uri: dataSource[position].url }}
            style={styles.imageFull}
          />
            <View style={{marginTop: "70%"}}>
              <Text style={styles.textCaption}>{dataSource[position].caption}</Text>
            </View>
        </>
      )}
    </View>
  )
}