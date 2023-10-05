import { createBoard } from '@wixc3/react-board';
import { CoreExample } from '../../../components/core-example/core-example';

export default createBoard({
    name: 'Core Example',
    Board: () => <CoreExample />,
    isSnippet: true,
});
