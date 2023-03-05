import { createBoard } from '@wixc3/react-board';
import { Popover2Example } from '../../../components/popover2-example/popover2-example';

export default createBoard({
    name: 'Popover2 Example',
    Board: () => <Popover2Example />,
});
