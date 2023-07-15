import { useState } from 'react';
import classNames from 'classnames';
import { Button, ButtonGroup, Intent, Slider, KeyComboTag } from '@blueprintjs/core';

import { Example } from '../example/example';
import styles from './core-example.module.scss';

export interface CoreExampleProps {
    className?: string;
}

export const CoreExample = ({ className }: CoreExampleProps) => {
    const [sliderValue, setSliderValue] = useState<number>(8);
    return (
        <Example header="Core Example" className={classNames(styles.root, className)}>
            <ButtonGroup>
                <Button text="Primary" intent="primary" disabled={true} aria-disabled />
                <Button intent={Intent.WARNING} text="Warning" />
                <Button intent={Intent.SUCCESS} text="Success" />
                <Button intent={Intent.DANGER} text="Danger" />
            </ButtonGroup>
            <br />
            <br />

            <KeyComboTag combo="mod" />
            <br />

            <Slider min={0} max={11} onChange={setSliderValue} value={sliderValue} />
        </Example>
    );
};
