import React from "react";
import { FieldTemplateProps } from "@rjsf/core";
import Form from 'react-bulma-components/lib/components/form';
import List from 'react-bulma-components/lib/components/list';

const BulmaFieldErrorListTemplate = (errors: any) => {
  if (!errors || !errors.length) return null;

  return <List renderAs="ul" className="error-list-field">
    {errors.map( (error: any, index: number) => (
      <List.Item renderAs="li" key={index}>{error}</List.Item>
    ))}
  </List>
};

const FieldTemplate = ({
  id,
  classNames,
  children,
  description,
  displayLabel,
  help,
  label,
  required,
  rawErrors = [],
  rawHelp,
}: FieldTemplateProps) => {
  return (
    <Form.Field className={classNames}>
      {displayLabel && label ? (
        <Form.Label className={required ? 'required' : ''} htmlFor={id}>{label}</Form.Label>
      ) : null}
      {description}
      {children}
      {BulmaFieldErrorListTemplate(rawErrors)}
      <Form.Help renderAs="div">{rawHelp ? rawHelp : help}</Form.Help>
    </Form.Field>
  );
};

export default FieldTemplate;
