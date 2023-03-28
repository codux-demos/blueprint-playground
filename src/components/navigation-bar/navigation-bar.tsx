import classNames from 'classnames';
import {
    Alignment,
    AnchorButton,
    Classes,
    Navbar,
    NavbarGroup,
    NavbarHeading,
    NavbarDivider,
} from '@blueprintjs/core';

import styles from './navigation-bar.module.scss';

export interface NavigationBarProps {
    className?: string;
}

export const NavigationBar = ({ className }: NavigationBarProps) => {
    return (
        <Navbar className={classNames(styles.root, Classes.DARK, className)}>
            <NavbarGroup align={Alignment.LEFT}>
                <NavbarHeading>Blueprint examples by Codux</NavbarHeading>
                <NavbarDivider />
                <AnchorButton
                    href="http://blueprintjs.com/docs"
                    text="Docs"
                    target="_blank"
                    minimal
                    rightIcon="share"
                />
                <AnchorButton
                    href="http://github.com/palantir/blueprint"
                    text="Github"
                    target="_blank"
                    minimal
                    rightIcon="code"
                />
            </NavbarGroup>
        </Navbar>
    );
};
