import React from "react";
import { FieldTemplateProps } from "@rjsf/core";
import Form from 'react-bulma-components/lib/components/form';
import List from 'react-bulma-components/lib/components/list';

const FieldErrorListTemplate = (errors: any) => {
  if (!errors || !errors.length) return null;

  return <List renderAs="ul" className="error-list-field">
    {errors.map( (error: any, index: number) => (
      <List.Item renderAs="li" key={index}>{error}</List.Item>
    ))}
  </List>
};

const FieldIsBool = (schema: any, uiSchema: any): boolean => {
  return (schema && schema['type'] == 'boolean') || (uiSchema && ['radio', 'checkbox'].includes('' + uiSchema['ui:widget']));
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
  rawErrors = [],
  rawHelp,
  schema,
  uiSchema,
}: FieldTemplateProps) => {
  
  return (
    <Form.Field className={classNames}>
      {displayLabel && label ? (
        <Form.Label className={required ? 'required' : ''} htmlFor={FieldIsBool(schema, uiSchema) ? null : id}>{label}</Form.Label>
      ) : null}
      {description}
      
      <Form.Control>
        {children}
      </Form.Control>
      
      {FieldErrorListTemplate(rawErrors)}
      <Form.Help renderAs="div">{rawHelp ? rawHelp : help}</Form.Help>
    </Form.Field>
  );
};

export default FieldTemplate;
