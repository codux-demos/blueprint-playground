import classNames from 'classnames';
import { Button, Menu, MenuItem } from '@blueprintjs/core';
import { ContextMenu2 } from '@blueprintjs/popover2';

import { Example } from '../example/example';
import styles from './popover2-example.module.scss';

export interface Popover2ExampleProps {
    className?: string;
}

export const Popover2Example = ({ className }: Popover2ExampleProps) => {
    const menu = (
        <Menu>
            <MenuItem text="by Codux" />
        </Menu>
    );
    return (
        <Example
            header="Popover2 Example"
            className={classNames(styles.root, className)}
        >
            <ContextMenu2 content={menu}>
                <Button
                    intent="primary"
                    outlined={true}
                    text="Right click me"
                />
            </ContextMenu2>
        </Example>
    );
};
