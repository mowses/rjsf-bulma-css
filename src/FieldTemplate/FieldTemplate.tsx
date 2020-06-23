import React from "react";
import { FieldTemplateProps } from "@rjsf/core";

const Form = require('react-bulma-components');
const Notification = require('react-bulma-components/lib/components/notification');
const List = require('react-bulma-components/lib/components/list');

const { Field, Help, Label } = Form;

function BulmaFieldErrorListTemplate(errors: any) {
  if (!errors) return null;

  return <List className="errors-list">
    {errors.map( (error: any, index: number) => (
      <Notification key={index}>{error}</Notification>
    ))}
  </List>
}

const FieldTemplate = ({
  id,
  classNames,
  children,
  description,
  displayLabel,
  help,
  label,
  required,
  rawErrors = []
}: FieldTemplateProps) => {
  return (
    <Field className={classNames}>
      {displayLabel && label ? (
        <Label htmlFor={id}>{label}{required ? <span className="required-mark">*</span> : null}</Label>
      ) : null}
      {description}
      {children}
      {BulmaFieldErrorListTemplate(rawErrors)}
      <Help>{help}</Help>
    </Field>
  );
};

export default FieldTemplate;
