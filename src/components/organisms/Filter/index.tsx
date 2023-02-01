import React from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import theme from "../../../Theme";
import CheckBoxTypoMolecule from "../../Molecules/CheckboxTypoMolecule";

interface FilterProps {
  classFilter?: string;
  updateStatusArr?: any;
}

const Wrapper = styled(Box)`
        width: 285px;
        height: auto;
        box-shadow: 0 5px 20px rgba(0,0,0,0.4);
        border-radius: 6px;
        font-size: 14px;
        font-family: "Inter",
        position: absolute;
        background: white;
    
        & .filterPara{
        padding: 0.75rem 1rem;
        font-weight: 500;
        border-bottom: 1px solid ${theme.palette.grey[50]};
        }
        & .statusPara {
        padding: 0.75rem 1rem;
        font-weight: 500;
        color: ${theme.palette.grey[200]};
        padding-bottom: 12px;
        }
        & .Adjudication
        {
          padding: 0.75rem 1rem;
          font-weight: 500;
          color: ${theme.palette.grey[200]};
          padding-bottom: 12px;
        }
`;

const Filter = ({ classFilter, updateStatusArr }: FilterProps) => {
  const Items = ["All status", "Clear", "Consider"];
  const adjudicationItems = ["All", "Engaged", "Pre adverse action"];
  return (
    <Wrapper className={`filterStyles ${classFilter}`}>
      <p className="filterPara">Filters</p>
      <p className="statusPara">Status</p>
      <CheckBoxTypoMolecule name="status" Items={Items} handleUpdate={updateStatusArr} />
      <p className="Adjudication">Adjudication</p>
      <CheckBoxTypoMolecule name="Adjudication" Items={adjudicationItems} />
    </Wrapper>
  );
};

export default Filter;
