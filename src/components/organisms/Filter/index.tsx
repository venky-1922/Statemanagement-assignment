import React from "react";
import Adjudication from "../../molecules/Adjudication";
import Status from "../../molecules/Status";
import {styled} from "@mui/system";
import theme from "../../../Theme";
import {Box} from "@mui/material"

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
`;

const Filter = ({ classFilter, updateStatusArr }: FilterProps) => {
    return (
        <Wrapper className={`filterStyles ${classFilter}`}>
            <p className="filterPara">Filters</p>
            <p className='statusPara'>Status</p>
            <Status handleUpdate={updateStatusArr} />
            <p className="statusPara">Adjudication</p>
            <Adjudication />
        </Wrapper>
    );
};

export default Filter;