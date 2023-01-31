import React, { useState } from "react";
import styled from "styled-components";
import TableHeader from "../../Molecules/TableHeader";
import Table from "../../Organisms/Table";

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  box-shadow: 0px 4px 28px rgba(45, 45, 47, 0.1);
  border-radius: 6px;
  overflow: auto;
`;

const CandidateTable = () => {
  const [filterVisibility, setFilterVisibility] = useState(false);
  const handleFilterVisibility = () => {
    setFilterVisibility((prev) => !prev);
  };
  return (
    <Wrapper>
      <TableHeader handleClick={handleFilterVisibility} />
      <Table showFilter={filterVisibility} />
    </Wrapper>
  );
};

export default CandidateTable;
