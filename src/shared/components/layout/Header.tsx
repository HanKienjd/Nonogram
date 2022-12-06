import RNBounceable from "@freakycoder/react-native-bounceable";
import { useTheme } from "@react-navigation/native";
import React, { useMemo, useState } from "react";
import { Alert, Image, Modal, Text, TouchableOpacity, View} from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import createStyles from "./Header.style";
import { Button } from '@rneui/themed';
import {useNavigation} from "@react-navigation/native";
import { SCREENS } from "@shared-constants";
interface HeaderComponentProps {
  onBack?: () => void;
}

export const Header: React.FC<HeaderComponentProps> = ({onBack}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const navigation = useNavigation();

  const MenuButton = () => (
    <RNBounceable>
      <TouchableOpacity onPress={() =>setModalVisible(true) }>
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
    <>
      {modalVisible && (
        <View style={styles.centeredView}>
              <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
            <View style={styles.modalView}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.modalText}>Settings</Text>
                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                  <Icon name="close" type="AntDesign" size={30} color="black" />
                </TouchableOpacity>

                </View>
              <Button title="End Game" buttonStyle={styles.btn} containerStyle={styles.containerButton} onPress={() => navigation.navigate(SCREENS.ENDGAME)} />
            <View style={styles.btnRowStyle}>
                <Button title="Guide"
                  buttonStyle={styles.btn} containerStyle={styles.containerRowButton} />
              <Button title="Language"  buttonStyle={styles.btn} containerStyle={styles.containerRowButton} />
              </View>
              <Button title="Clear List"   buttonStyle={styles.btn} containerStyle={styles.containerButton} />
            <Button title="Sound: on"  buttonStyle={styles.btn} containerStyle={styles.containerButton} />
            <Button title="Music: on"  buttonStyle={styles.btn} containerStyle={styles.containerButton} />
            <Button title="Account"  buttonStyle={styles.btn} containerStyle={styles.containerButton} />
            <Button title="Exit"  buttonStyle={styles.btn} containerStyle={styles.containerButton} />
          </View>
      </Modal>

        </View>
      )}
    <View style={styles.header}>
      <TouchableOpacity onPress={onBack}>
        <BackButton />
      </TouchableOpacity>
      <MenuButton />
    </View>
    
    
    </>
  );
};
