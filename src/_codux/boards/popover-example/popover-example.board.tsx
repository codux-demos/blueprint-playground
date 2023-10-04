import { createBoard } from '@wixc3/react-board';
import { PopoverExample } from '../../../components/popover-example/popover-example';

export default createBoard({
    name: 'Popover Example',
    Board: () => <PopoverExample />,
    isSnippet: true,
});
