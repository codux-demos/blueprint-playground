import styles from './App.module.scss';

import { FocusStyleManager } from '@blueprintjs/core';

import { NavigationBar } from './components/navigation-bar/navigation-bar';
import { CoreExample } from './components/core-example/core-example';
import { SelectExample } from './components/select-example/select-example';
import { DatetimeExample } from './components/datetime-example/datetime-example';
import { PopoverExample } from './components/popover-example/popover-example';

FocusStyleManager.onlyShowFocusOnTabs();

function App() {
    return (
        <div className={styles.App}>
            <NavigationBar />
            <CoreExample />
            <SelectExample />
            <DatetimeExample />
            <PopoverExample />
        </div>
    );
}
export default App;
