import React from 'react'

interface TableHeadProps{
    colHeadings:string[];
    css?:string;
}

const TableHead = ({colHeadings,css}:TableHeadProps) => {
  return (
    <tr>
        {
            colHeadings.map((item)=>{
                return (
                    <th>{item}</th>
                );
            })
        }
    </tr>
  )
}

export default TableHead