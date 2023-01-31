import React from "react";
import { Typography } from "@mui/material";
import {Box} from "@mui/material";

interface TextWithIconProps {
  classMainCon?: string;
  classIcon?: string;
  classText?: string;
  Icon: any;
  text: string;
  variant?:
    | "inherit"
    | "button"
    | "overline"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2";
  onClick: any;
}

const TextWithIcon = ({
  Icon,
  text,
  variant,
  classMainCon,
  classIcon,
  classText,
  onClick,
}: TextWithIconProps) => {
  return (
    <Box className={classMainCon} onClick={onClick}>
      <Icon className={classIcon} />
      <Typography
        variant={ variant || "subtitle1"}
        className={classText}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default TextWithIcon;
