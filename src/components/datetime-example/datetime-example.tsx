import classNames from 'classnames';
import { DatePicker } from '@blueprintjs/datetime';

import { Example } from '../example/example';
import styles from './datetime-example.module.scss';

export interface DatetimeExampleProps {
    className?: string;
}

export const DatetimeExample = ({ className }: DatetimeExampleProps) => {
    return (
        <Example header="Datetime Example" className={classNames(styles.root, className)}>
            <DatePicker className={styles.datepicker} timePrecision="minute" />
        </Example>
    );
};
