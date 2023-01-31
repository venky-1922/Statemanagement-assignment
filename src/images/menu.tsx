import React from "react";
import { Box } from "@mui/system";
interface Props {
  css?: string;
}

const MenuSvg = ({ css }: Props) => {
  return (
    <Box className={css}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 16.6667C9.72222 16.6667 9.48611 16.5695 9.29167 16.375C9.09722 16.1806 9 15.9445 9 15.6667C9 15.3889 9.09722 15.1528 9.29167 14.9584C9.48611 14.7639 9.72222 14.6667 10 14.6667C10.2778 14.6667 10.5139 14.7639 10.7083 14.9584C10.9028 15.1528 11 15.3889 11 15.6667C11 15.9445 10.9028 16.1806 10.7083 16.375C10.5139 16.5695 10.2778 16.6667 10 16.6667ZM10 11C9.72222 11 9.48611 10.9028 9.29167 10.7084C9.09722 10.5139 9 10.2778 9 10C9 9.72226 9.09722 9.48615 9.29167 9.29171C9.48611 9.09726 9.72222 9.00004 10 9.00004C10.2778 9.00004 10.5139 9.09726 10.7083 9.29171C10.9028 9.48615 11 9.72226 11 10C11 10.2778 10.9028 10.5139 10.7083 10.7084C10.5139 10.9028 10.2778 11 10 11ZM10 5.33337C9.72222 5.33337 9.48611 5.23615 9.29167 5.04171C9.09722 4.84726 9 4.61115 9 4.33337C9 4.0556 9.09722 3.81949 9.29167 3.62504C9.48611 3.4306 9.72222 3.33337 10 3.33337C10.2778 3.33337 10.5139 3.4306 10.7083 3.62504C10.9028 3.81949 11 4.0556 11 4.33337C11 4.61115 10.9028 4.84726 10.7083 5.04171C10.5139 5.23615 10.2778 5.33337 10 5.33337Z"
          fill="#696A6E"
        />
      </svg>
    </Box>
  );
};

export default MenuSvg;
