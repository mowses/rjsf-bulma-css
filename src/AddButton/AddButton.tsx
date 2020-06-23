import React from 'react';
import { AddButtonProps } from '@rjsf/core';

const Button = require('react-bulma-components/lib/components/button');
const Icon = require('react-bulma-components/lib/components/icon');

const AddButton: React.FC<AddButtonProps> = props => (
  <Button {...props} className="button-add">
    <Icon icon="fa-add" /> Add Item
  </Button>
);

export default AddButton;
