import { withTheme, FormProps } from '@rjsf/core';

import Theme from '../Theme';
import { StatelessComponent } from 'react';

const BulmaForm: React.ComponentClass<FormProps<any>> | StatelessComponent<FormProps<any>>  = withTheme(Theme);

export default BulmaForm;
