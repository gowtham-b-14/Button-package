import React, { useState } from "react";
import { BUTTON_TYPES } from "../data/Constant";
//import "./button.css";
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  Platform,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";

const Button = (props: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const {
    type,
    text,
    icon,
    iconposition,
    onClick,
    size,
    loading,
    loadingcolor,
  } = props;
  const isWeb = Platform.OS === "web";
  const ButtonComponent: any = isWeb ? TouchableHighlight : TouchableOpacity;
  let styling: Array<object> = [];
  const getButtonClass = () => {
    switch (type) {
      case BUTTON_TYPES.PRIMARY:
        return "primaryButton";
      case BUTTON_TYPES.SECONDARY:
        return "secondaryButton";
      case BUTTON_TYPES.TERTIARY:
        return "tertiaryButton";
      case BUTTON_TYPES.DASHED:
        return "dashedButton";
      case BUTTON_TYPES.DANGER:
        return "dangerButton";
      case BUTTON_TYPES.TEXT:
        return "textButton";
      default:
        return "secondaryBtn button";
    }
  };
  const stylesforbutton = () => {
    switch (type) {
      case BUTTON_TYPES.PRIMARY:
        return (styling = [
          styles.primaryBtn,
          styles.button,
          isHovered && styles.primaryBtnhovered,
        ]);
      case BUTTON_TYPES.SECONDARY:
        return (styling = [
          styles.secondaryBtn,
          styles.button,
          isHovered && styles.secondaryBtnhovered,
        ]);
      case BUTTON_TYPES.TERTIARY:
        return (styling = [
          styles.tertiaryBtn,
          styles.button,
          isHovered && styles.tertiaryBtnhovered,
        ]);
      case BUTTON_TYPES.DASHED:
        return (styling = [
          styles.dashedBtn,
          styles.button,
          isHovered && styles.dashedBtnhovered,
        ]);
      case BUTTON_TYPES.DANGER:
        return (styling = [
          styles.dangerBtn,
          styles.button,
          isHovered && styles.dangerBtnhovered,
        ]);
      case BUTTON_TYPES.TEXT:
        return (styling = [
          styles.textBtn,
          styles.button,
          isHovered && styles.textBtnhovered,
        ]);
      default:
        return (styling = [
          styles.secondaryBtn,
          styles.button,
          isHovered && styles.secondaryBtnhovered,
        ]);
    }
  };

  return (
    <ButtonComponent
      style={stylesforbutton()}
      className={getButtonClass()}
      onPress={onClick ? onClick : () => console.log("Nothing is happening")}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* adding loading icon to mobile will be worked in future */}
      <Text>
        {isWeb
          ? loading &&
            loading === "true" && (
              <ActivityIndicator
                color={loadingcolor ? `${loadingcolor}` : "white"}
                style={{ padding: 5 }}
              />
            )
          : console.log("sorry In mobile you can not add loading icon !")}
        {icon && iconposition === "left" && icon}
        <Text
          style={
            type === BUTTON_TYPES.DANGER ? { color: "red" } : { color: "black" }
          }
        >
          {text}
        </Text>

        {icon && iconposition === "right" && icon}
      </Text>
    </ButtonComponent>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  primaryBtn: {
    backgroundColor: "#1677ff",
    padding: "12px 24px",
    borderRadius: 6,
    color: "white",
    fontWeight: "600px",
    letterSpacing: "1.2px",
    transition: "background-color 0.3s ease",
  },
  dashedBtn: {
    padding: "12px 24px",
    borderRadius: 6,
    color: "black",
    fontWeight: "600px",
    letterSpacing: "1.2px",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "lightgrey",
  },
  textBtn: {
    padding: "12px 24px",
    color: "black",
    fontWeight: "600px",
    letterSpacing: "1.2px",
  },
  dangerBtn: {
    padding: "12px 24px",
    borderRadius: 6,
    fontWeight: "600px",
    letterSpacing: "1.2px",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "red",
  },
  secondaryBtn: {
    padding: "12px 24px",
    borderRadius: 6,
    color: "black",
    fontWeight: "600px",
    letterSpacing: "1.2px",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "lightgrey",
    transition: "background-color 0.3s ease",
  },
  tertiaryBtn: {
    padding: "12px 24px",
    color: " #1677ff",
    fontWeight: "600px",
    letterSpacing: "1.2px",
  },
  primaryBtnhovered: {
    transform: [{ scale: 1.2 }],
  },
  secondaryBtnhovered: {
    borderColor: "#1677ff",
    transform: [{ scale: 1.2 }],
  },
  dashedBtnhovered: {
    borderColor: "#1677ff",
    transform: [{ scale: 1.2 }],
  },
  dangerBtnhovered: {
    borderColor: "#ffa39e",
    transform: [{ scale: 1.2 }],
  },
  textBtnhovered: {
    backgroundColor: "lightgrey",
    borderRadius: 6,
    transform: [{ scale: 1.2 }],
  },
  tertiaryBtnhovered: {
    transform: [{ scale: 1.2 }],
  },
});
