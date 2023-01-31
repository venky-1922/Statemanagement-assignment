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
  return <input className="inp" value="Text" style={props.css} {...props} />;
};
export default TextField;
