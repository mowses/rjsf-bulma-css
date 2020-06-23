import React from 'react';
import { ObjectFieldTemplateProps } from '@rjsf/core';
import Card from 'react-bulma-components/lib/components/card';

const ObjectFieldTemplate = ({
  description,
  title,
  properties,
  uiSchema
}: ObjectFieldTemplateProps) => {

  return (
    <Card>
      {(uiSchema['ui:title'] || title) && (
        <Card.Header>{title}</Card.Header>
      )}
      {description && (
        <p>{description}</p>
      )}
      <Card.Content>
        {properties.map( (element, index) => (
          <div key={index} className="field-row">{element.content}</div>
        ))}
      </Card.Content>
    </Card>
  );
};

export default ObjectFieldTemplate;
