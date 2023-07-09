import { useState } from 'react';
import classNames from 'classnames';
import { Button, MenuItem } from '@blueprintjs/core';
import { Select } from '@blueprintjs/select';

import { Example } from '../example/example';
import { filterFilm, renderFilm, IFilm, TOP_100_FILMS } from './films';
import styles from './select-example.module.scss';

export interface SelectExampleProps {
    className?: string;
}

export const SelectExample = ({ className }: SelectExampleProps) => {
    const [film, setFilm] = useState<IFilm>(TOP_100_FILMS[0]);
    return (
        <Example header="Select Example" className={classNames(styles.root, className)}>
            <Select<IFilm>
                items={TOP_100_FILMS}
                itemPredicate={filterFilm}
                itemRenderer={renderFilm}
                noResults={<MenuItem disabled={true} text="No results." />}
                onItemSelect={setFilm}
                className={styles.select}
            >
                <Button text={film.title} rightIcon="caret-down" />
            </Select>
        </Example>
    );
};
