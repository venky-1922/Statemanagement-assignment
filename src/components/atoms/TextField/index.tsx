import React from "react";

export interface TextFieldProps {
  className?: string;
  type: string;
  placeholder: string;
  min?: string;
  max?: string;
  css?: {};
}
const TextField = (props: TextFieldProps) => {
  return <input className="inp" style={props.css} {...props} />;
};
export default TextField;
