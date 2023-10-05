import { createBoard } from '@wixc3/react-board';
import { SelectExample } from '../../../components/select-example/select-example';

export default createBoard({
    name: 'Select Example',
    Board: () => <SelectExample />,
    environmentProps: {
        canvasMargin: {
            top: 24,
        },
    },
    isSnippet: true,
});
