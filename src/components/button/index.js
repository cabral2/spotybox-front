import React from "react";
import Button from '@mui/material/Button';

const buttonType = (props) => {
  if (props.unfollow)
    return {
      value: "Unfollow",
      color: 'white',
      backgroundColor: '#2D2D2D',
      borderColor: '#A0A0A0',
      borderWidth: 2,
      width: 150,
      borderRadius: 15,
      onClick: () => console.log("Unfollow")
    }
  if (props.blockUser)
    return {
      value: "Block User",
      color: 'white',
      backgroundColor: '#2D2D2D',
      borderColor: 'red',
      borderWidth: 2,
      width: 150,
      borderRadius: 15,
      onClick: () => console.log("Block User")
    }

  return props;
}

export default function ButtonSpoty(props) {
  const {value, color, backgroundColor, borderColor, borderWidth, width, borderRadius, onClick} = buttonType(props);
  
  return(
    <Button 
      variant="outlined" 
      style={{
        backgroundColor,
        color,
        borderColor,
        borderWidth,
        width,
        borderRadius
      }}
      onClick={onClick}>
      {value}
    </Button>
  );
}