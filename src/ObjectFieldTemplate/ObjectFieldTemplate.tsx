import React from 'react';
import { ObjectFieldTemplateProps } from '@rjsf/core';

const Card = require('react-bulma-components/lib/components/card');
const Content = require('react-bulma-components/lib/components/content');

const { Header } = Card;

const ObjectFieldTemplate = ({
  description,
  title,
  properties,
  uiSchema
}: ObjectFieldTemplateProps) => {

  return (
    <Card>
      {(uiSchema['ui:title'] || title) && (
        <Header>{title}</Header>
      )}
      {description && (
        <p>{description}</p>
      )}
      <Content>
        {properties.map( (element, index) => (
          <div key={index} className="field-row">{element.content}</div>
        ))}
      </Content>
    </Card>
  );
};

export default ObjectFieldTemplate;
