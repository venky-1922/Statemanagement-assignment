import React, { useState } from "react";
import TableContent from "../TableContent";
import styled from "styled-components";
import dummyData from "../../../MOCK_DATA.json";
import theme from "../../../Theme";
import TableHead from "../../Molecules/TableHead";
import Filter from "../Filter";

interface TableProps {
  showFilter?: boolean;
}

const TableStyled = styled.table`
  width: 100%;
  font-size: 12px;
  border-spacing: 0;
  text-align: left;
  position: relative;
  & td {
    border-bottom: 1px solid ${theme.palette.grey[50]};
  }
  & th {
    border-bottom: 1px solid ${theme.palette.grey[50]} !important;
    border-top: 1px solid ${theme.palette.grey[50]} !important;
  }
  & .tHead {
    height: 42px;
    color: ${theme.palette.grey[100]};
    background: ${theme.palette.grey[300]};
    & th {
      padding-left: 1.515%;
      border: none;
    }
    & :nth-child(1) {
      width: 20%;
    }
    & :nth-child(2) {
      width: 20%;
    }
    & :nth-child(3) {
      width: 20%;
    }
    & :nth-child(4) {
      width: 20%;
    }
  }
  & .tRows {
    height: 42px;
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    & td {
      padding-left: 1.515%;
    }
    & :first-child {
      color: ${theme.palette.primary.main};
    }
    border-bottom: 1px solid ${theme.palette.grey[50]};
  }
  & .consider {
    background: #faf8eb;
    color: #a08817 !important;
    padding: 0.25rem 1em;
    border-radius: 4px;
    font-size: 12px;
  }
  & .clear {
    border-radius: 4px;
    padding: 0.25rem 1em;
    color: #17a076 !important;
    background: #f2fcfb;
    font-size: 12px;
  }
  & .filter {
    position: absolute;
    top: 0.2%;
    left: 65%;
    display: none;
  }
  & .show {
    display: block;
  }
`;

const Table = ({ showFilter }: TableProps) => {
  const headings = ["NAME", "ADJUDICATION", "STATUS", "LOCATION", "DATE"];
  let newArray = dummyData;

  const initialState = {
    1: false,
    2: false,
    3: false,
  };
  const [statusObj, setStatusObj] = useState(initialState);
  const handleSetStatusObj = (e: any) => {
    const name = e.target.id;
    setStatusObj((prev) => {
      return { ...prev, [name]: e.target.checked };
    });
  };

  let filteredArray = newArray.filter((item) => {
    if (statusObj[2] && statusObj[3]) return true;
    else if (statusObj[3]) return item.status === "CONSIDER";
    else if (statusObj[2]) return item.status === "CLEAR";
    else return true;
  });

  return (
    <TableStyled>
      <thead>
        <TableHead colHeadings={headings} css="tHead" />
      </thead>
      <TableContent
        data={filteredArray}
        rowClass="tRows"
        considerClass="consider"
        clearClass="clear"
      />

      <Filter
        classFilter={showFilter ? `show filter` : "filter"}
        updateStatusArr={handleSetStatusObj}
      />
    </TableStyled>
  );
};

export default Table;
