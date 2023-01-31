import React from "react";
import { Box } from "@mui/material";
import {Checkbox} from '../../Atoms/CheckBox';

const adjudicationItems = ["All", "Engaged", "Pre adverse action"];
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
const Adjudication = () => {
  return (
    <Box>
      {adjudicationItems.map((item, idx) => (
        <Checkbox
          name="adjudication"
          id={(idx + 1).toString()}
          text={item}
          css={checkboxStyles}
        />
      ))}
    </Box>
  );
};

export default Adjudication;
