import React from 'react';
import Button from 'react-bulma-components/lib/components/button';
import Icon from 'react-bulma-components/lib/components/icon';

const IconButton = (props: any) => {
  const { icon, ...otherProps } = props;
  return (
    <Button {...otherProps}>
      <Icon icon={icon} />
    </Button>
  );
};

export default IconButton;
