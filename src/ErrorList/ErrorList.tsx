import React from 'react';
import { ErrorListProps } from '@rjsf/core';
import Card from 'react-bulma-components/lib/components/card';
import Icon from 'react-bulma-components/lib/components/icon';
import List from 'react-bulma-components/lib/components/list';

const ErrorList = ({ errors }: ErrorListProps) => (
  <Card className="errors-card">
    <Card.Header>
      <Card.Header.Title>Errors</Card.Header.Title>
    </Card.Header>
    <Card.Content>
      <List>
        {errors.map((error, i: number) => {
          return (
            <List.Item key={i}>
              <Icon icon="fa-error" />
              {error.stack}
            </List.Item>
          );
        })}
      </List>
    </Card.Content>
  </Card>
);

export default ErrorList;
