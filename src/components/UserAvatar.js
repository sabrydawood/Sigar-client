import { Avatar } from "@mui/material";
import React from "react";

const UserAvatar = ({ username, height, width }) => {
  return (
    <Avatar
      sx={{
        height: height,
        width: width,
        backgroundColor: "lightgray",
      }}
      src={"/assets/img/default-avatar.jpeg"}
    />
  );
};

export default UserAvatar;
