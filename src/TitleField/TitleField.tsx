import React from 'react';
import { FieldProps } from '@rjsf/core';
import Heading from 'react-bulma-components/lib/components/heading';

const TitleField = ({ title }: FieldProps) => (
    <Heading renderAs="h5">{title}</Heading>
);

export default TitleField;
