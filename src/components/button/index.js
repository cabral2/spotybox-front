import React from "react";
import Button from "@mui/material/Button";
import { useAppThemeContext } from "../../theme/ThemeContext";

const buttonType = (props) => {
  if (props.unfollow)
    return {
      value: "Unfollow",
      color: "secondary",
      borderColor: "#A0A0A0",
      borderWidth: 2,
      width: 150,
      borderRadius: 15,
      onClick: () => console.log("Unfollow"),
    };
  if (props.blockUser)
    return {
      value: "Block User",
      color: "secondary",
      borderColor: "red",
      borderWidth: 2,
      width: 150,
      borderRadius: 15,
      onClick: () => console.log("Block User"),
    };

  return props;
};

export default function ButtonSpoty(props) {
  const { theme } = useAppThemeContext();
  const {
    value,
    color,
    borderColor,
    borderWidth,
    width,
    borderRadius,
    onClick,
  } = buttonType(props);

  return (
    <Button
      variant="outlined"
      color={color}
      style={{
        backgroundColor: theme?.palette?.primary?.color,
        borderColor,
        borderWidth,
        width,
        borderRadius,
      }}
      onClick={onClick}
    >
      {value}
    </Button>
  );
}
