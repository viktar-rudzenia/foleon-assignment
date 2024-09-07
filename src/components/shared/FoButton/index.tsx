import { ReactNode } from 'react';
import cn from 'classnames';

import styles from './index.module.scss';

interface FoButtonProps {
  onClick?: () => void;
  children?: ReactNode;
  additionalClassName?: string;
}

export default function FoButton({ children, onClick, additionalClassName }: FoButtonProps) {
  return (
    <button type="button" className={cn(styles.button, additionalClassName)} onClick={onClick}>
      {children}
    </button>
  );
}
