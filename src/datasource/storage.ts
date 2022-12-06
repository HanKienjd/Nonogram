import { ITimer } from "Commons/timer/types";
import { ICategory } from "Types/Category";
import { ILevel } from "Types/Level";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storeKey = (categoryTitle: ICategory["title"], level: ILevel["title"]) =>
  `${categoryTitle}.${level}`;

export const hasLocalStorage = async () => {
  return AsyncStorage !== null;
};

export const setLevelTime = async (
  categoryTitle: ICategory["title"],
  levelTitle: ILevel["title"],
  time: ITimer,
): Promise<void> =>
  await AsyncStorage.setItem(
    storeKey(categoryTitle, levelTitle),
    JSON.stringify(time),
  );

export const getLevelTime = async (
  categoryTitle: ICategory["title"],
  levelTitle: ILevel["title"],
): ITimer => {
  const storedValue = await AsyncStorage.getItem(
    storeKey(categoryTitle, levelTitle),
  );
  return JSON.parse(storedValue) || undefined;
};
