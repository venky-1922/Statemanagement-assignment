import React from "react";
import { Box } from "@mui/material";
import { Checkbox } from '../../Atoms/CheckBox'

interface StatusProps {
  handleUpdate?: any;
  Items:string[]; 
  name:string;

}

const checkboxStyles = {
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "18px",
  height: "24px",
  display: "flex",
  alignItems: "center",
  marginLeft: "19px",
  marginBottom: "12px",
};

const Status = ({ handleUpdate,...props }: StatusProps) => {
  return (
    <Box>
      {props.Items.map((item:string, idx:number) => (
        <Checkbox
          name={props.name}
          id={(idx + 1).toString()}
          text={item}
          css={checkboxStyles}
          handleClick={handleUpdate}
        />
      ))}
    </Box>
  );
};

export default Status;
