import React from "react";
import { WidgetProps } from "@rjsf/core";

const Element = require('react-bulma-components/lib/components/element');
const Form = require('react-bulma-components/lib/components/form');
const { Label, Textarea } = Form;

type CustomWidgetProps = WidgetProps & {
  options: any;
};

const TextareaWidget = ({
  id,
  placeholder,
  value,
  required,
  disabled,
  autofocus,
  label,
  readonly,
  onBlur,
  onFocus,
  onChange,
  options,
  schema,
}: CustomWidgetProps) => {
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
      <Textarea
        id={id}
        required={required}
        placeholder={placeholder}
        disabled={disabled || readonly}
        value={value}
        autoFocus={autofocus}
        rows={options.rows || 5}
        onChange={_onChange}
        onBlur={_onBlur}
        onFocus={_onFocus}
      />
    </>
  );
};

export default TextareaWidget;
