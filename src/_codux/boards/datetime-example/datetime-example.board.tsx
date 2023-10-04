import { createBoard } from '@wixc3/react-board';
import { DatetimeExample } from '../../../components/datetime-example/datetime-example';

export default createBoard({
    name: 'Datetime Example',
    Board: () => <DatetimeExample />,
    isSnippet: true,
});
