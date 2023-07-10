import { Button, Menu, MenuItem, Popover } from '@blueprintjs/core';
import classNames from 'classnames';

import { Example } from '../example/example';
import styles from './popover-example.module.scss';

export interface PopoverExampleProps {
    className?: string;
}

export const PopoverExample = ({ className }: PopoverExampleProps) => {
    const menu = (
        <Menu>
            <MenuItem text="by Codux" />
        </Menu>
    );
    return (
        <Example header="Popover Example" className={classNames(styles.root, className)}>
            <Popover content={menu}>
                <Button intent="primary" outlined={true} text="Right click me" />
            </Popover>
        </Example>
    );
};
