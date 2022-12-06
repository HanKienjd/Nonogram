import { useTheme } from "@react-navigation/native";
import { useMemo, useState } from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import createStyles from "./Story.style";
import SliderItem from "../components/slider-story/SliderItem";

export default function StoryGame() {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const [showStory, setShowStory] = useState(false);

  return (
    <>
      {!showStory && (
        <TouchableOpacity
          onPress={() => setShowStory(true)}
          style={styles.container}
        >
          <ImageBackground
            source={require("assets/background_welcome.png")}
            style={styles.image}
          >
            <View style={{alignItems: "center"}}>
            <Text style={styles.textStory}>
              While travelling with my parents when i was a child, i saw land in
              the clouds. Everyone told me it was an illusion. But i believe
              it's real
            </Text>
            </View>
            <View style={styles.containerStoryBelow}>
              <Text style={styles.textStoryBelow}>
                Today,I am on a long magical journey, leaving this city and
                finding the land in the clouds.
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      )}
      {showStory && <SliderItem />}
    </>
  );
}
