import React, { useState } from "react";
import TableHeader from "../../molecules/table header";
import Table from "../../organisms/Table";
import styled from "styled-components";

const Wrapper = styled.div`
    height: 90vh;
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
