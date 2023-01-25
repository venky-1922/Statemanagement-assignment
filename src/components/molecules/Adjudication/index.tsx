import React from "react";
import { Checkbox } from "../../atoms/CheckBox";

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
    <div>
      {adjudicationItems.map((item, idx) => (
        <Checkbox
          name="adjudication"
          id={(idx + 1).toString()}
          text={item}
          css={checkboxStyles}
        />
      ))}
    </div>
  );
};

export default Adjudication;
