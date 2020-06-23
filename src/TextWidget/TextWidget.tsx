import React from "react";
import { WidgetProps } from "@rjsf/core";

const Element = require('react-bulma-components/lib/components/element');
const Form = require('react-bulma-components/lib/components/form');
const { Label, Input } = Form;

const TextWidget = ({
  id,
  required,
  readonly,
  disabled,
  type,
  label,
  value,
  onChange,
  onBlur,
  onFocus,
  autofocus,
  options,
  schema,
}: WidgetProps) => {
  const _onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    onChange(value === "" ? options.emptyValue : value);
  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);

  return (
    <>
      <Label htmlFor={id}>{label || schema.title}{required ? <Element renderAs="span" className="required-mark">*</Element> : null}</Label>
      <Input
        type={type || (schema.type as string)}
        id={id}
        autoFocus={autofocus}
        required={required}
        disabled={disabled || readonly}
        name={name}
        value={value || value === 0 ? value : ""}
        onChange={_onChange}
        onBlur={_onBlur}
        onFocus={_onFocus}
      />
    </>
  );
};

export default TextWidget;
