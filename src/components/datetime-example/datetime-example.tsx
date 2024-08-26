import classNames from 'classnames';
import { DatePicker3 } from '@blueprintjs/datetime2';

import { Example } from '../example/example';
import styles from './datetime-example.module.scss';

export interface DatetimeExampleProps {
    className?: string;
}

export const DatetimeExample = ({ className }: DatetimeExampleProps) => {
    return (
        <Example header="Datetime Example" className={classNames(styles.root, className)}>
            <DatePicker3 className={styles.datepicker} timePrecision="minute" />
        </Example>
    );
};
