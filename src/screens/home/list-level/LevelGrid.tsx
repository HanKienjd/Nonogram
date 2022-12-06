import { useTheme } from "@react-navigation/native";
import { Header } from "@shared-components/layout/Header";
import { useMemo, useState } from "react";
import createStyles from "./ListLevel.style";
import { ImageBackground, Text, View, FlatList, Image } from "react-native";
import { getCategoryWithLevels } from "datasource/datasource";

type ListItemsProps = {
  countdownMinutes: number;
  levels: Array<any>;
  items: any;
};
const ItemLevel = ({ items, index }: ListItemsProps) => {
  console.log(items);
  return (
    <View style={styles.containerItemLevel}>
      <Text>{items.title}</Text>
      <Image source={items.imageUrl} />
    </View>
  );
};

export default function LevelGrid() {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const [categoryId, setCategoryId] = useState("5x5");
  const category = getCategoryWithLevels(categoryId);

  return (
    <ImageBackground
      source={require("@assets/background_home.jpg")}
      style={styles.container}
    >
      <View style={styles.containerHeader}>
        <Header />
      </View>
      <View style={styles.titlePage}>
        <Text style={styles.textPage}>Play List</Text>
      </View>
      <View style={styles.containerListLevel}>
        {/* <FlatList
          data={category}
          renderItem={ItemLevel?.levels}
          keyExtractor={(item) => item.id}
          numColumns={3}
          horizontal={false}
          initialNumToRender={15}
        /> */}
      </View>
    </ImageBackground>
  );
}
