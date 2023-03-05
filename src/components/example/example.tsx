import React from 'react';
import styles from './example.module.scss';
import classNames from 'classnames';

import { H3, Card } from '@blueprintjs/core';

export interface ExampleProps {
    className?: string;
    children?: React.ReactNode;
    header: string;
}

export const Example = ({ className, children, header }: ExampleProps) => {
    return (
        <Card className={classNames(styles.root, className)}>
            <H3>{header}</H3>
            {children && children}
        </Card>
    );
};
