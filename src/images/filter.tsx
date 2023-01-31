import React from "react";
import { Box } from "@mui/material";
interface Props {
  css?: string;
}

const FilterSvg = ({ css }: Props) => {
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
          d="M8.33333 15V13.75H11.6667V15H8.33333ZM5 10.625V9.375H15V10.625H5ZM2.5 6.25V5H17.5V6.25H2.5Z"
          fill="#696A6E"
        />
      </svg>
    </Box>
  );
};

export default FilterSvg;
