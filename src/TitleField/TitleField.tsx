import React from 'react';
import { FieldProps } from '@rjsf/core';

const Box = require('react-bulma-components/lib/components/box');
const Heading = require('react-bulma-components/lib/components/heading');

const TitleField = ({ title }: FieldProps) => (
  <Box>
    <Heading renderAs="h5">{title}</Heading>
  </Box>
);

export default TitleField;
