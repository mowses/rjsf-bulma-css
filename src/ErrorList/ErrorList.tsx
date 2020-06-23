import React from 'react';
import { ErrorListProps } from '@rjsf/core';

const Card = require('react-bulma-components/lib/components/card');
const Icon = require('react-bulma-components/lib/components/icon');
const List = require('react-bulma-components/lib/components/list');
const { CardContent, CardHeader } = Card;
const { CardHeaderTitle } = CardHeader;
const { ListItem } = List;

const ErrorList = ({ errors }: ErrorListProps) => (
  <Card className="errors-card">
    <CardHeader>
      <CardHeaderTitle>Errors</CardHeaderTitle>
    </CardHeader>
    <CardContent>
      <List>
        {errors.map((error, i: number) => {
          return (
            <ListItem key={i}>
              <Icon icon="fa-error" />
              {error.stack}
            </ListItem>
          );
        })}
      </List>
    </CardContent>
  </Card>
);

export default ErrorList;
