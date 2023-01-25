import React from "react";
interface TableContentProps {
  rowClass?: string;
  considerClass?: string;
  clearClass?: string;
  data: any;
}

const TableContent = ({
  rowClass,
  considerClass,
  clearClass,
  data,
}: TableContentProps) => {
  return (
    <>
      {data.map((item: any) => {
        return (
          <tr className={rowClass}>
            <td>{item.name}</td>
            <td> - </td>
            <td>
              <span
                className={
                  item.status === "CONSIDER" ? considerClass : clearClass
                }
              >
                {item.status}
              </span>
            </td>
            <td>{item.location}</td>
            <td>{item.date}</td>
          </tr>
        );
      })}
    </>
  );
};

export default TableContent;
