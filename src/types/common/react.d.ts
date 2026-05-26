import type { ReactNode } from 'types/common/react';

declare global {
  type TPropsWithClassName = {
    className?: string;
  };

  type TPropsWithChildren = {
    children?: ReactNode;
  };

  type TDefaultProps = TPropsWithClassName & TPropsWithChildren;
}
