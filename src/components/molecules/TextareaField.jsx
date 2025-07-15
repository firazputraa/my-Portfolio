import React from "react";
import Textarea from "../atoms/Textarea";
import Label from "../atoms/Label";
const TextareaField = ({
  id,
  label,
  value,
  name,
  placeholder,
  disabled = false,
  readOnly = false,
  onChange,
  className = '',
  textareaClassName = '',
  labelClassName = '',
  rows=5
}) => {
  return (
    <div
      className={`input-field-group ${className}`}
    >
      {label && <Label htmlFor={id} className={labelClassName}>{label}</Label>}
      <Textarea
        id={id}
        value={value}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        onChange={onChange}
        textareaClassName={textareaClassName}
        rows={rows}
      />
    </div>
  )
}
export default TextareaField;