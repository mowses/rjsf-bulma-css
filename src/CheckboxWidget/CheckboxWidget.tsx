import React from "react";
import { WidgetProps } from "@rjsf/core";

const Form = require('react-bulma-components/lib/components/form');
const { Checkbox, Label } = Form;

const CheckboxWidget = (props: WidgetProps) => {
  const {
    id,
    value,
    required,
    disabled,
    readonly,
    label,
    autofocus,
    onChange,
    onBlur,
    onFocus,
  } = props;

  const _onChange = ({}, checked: boolean) => onChange(checked);
  const _onBlur = ({
    target: { value },
  }: React.FocusEvent<HTMLButtonElement>) => onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLButtonElement>) => onFocus(id, value);

  return (
    <Label className="checkbox">
      <Checkbox
          id={id}
          checked={typeof value === "undefined" ? false : value}
          required={required}
          disabled={disabled || readonly}
          autoFocus={autofocus}
          onChange={_onChange}
          onBlur={_onBlur}
          onFocus={_onFocus}
        />{label}
    </Label>
  );
};

export default CheckboxWidget;
