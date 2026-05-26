import * as React from 'react';

import { mapIconTypeToComponent } from '../config.ts';
import { TCommonIconProps, EIconType } from '../types.ts';

type TProps = TCommonIconProps & {
  type: EIconType;
};

const Icon: React.FC<TProps> = ({ type, size = 18, ...rest }) => {
  const Component = mapIconTypeToComponent[type];

  return <Component size={size} {...rest} />;
};

export default React.memo(Icon);
