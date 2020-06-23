import React from 'react';
import { FieldProps } from '@rjsf/core';
import Heading from 'react-bulma-components/lib/components/heading';

const DescriptionField = ({ description }: FieldProps) => {
  if (!description) return null;

  return (
    <Heading subtitle size={6}>
      {description}
    </Heading>
  );
};

export default DescriptionField;
