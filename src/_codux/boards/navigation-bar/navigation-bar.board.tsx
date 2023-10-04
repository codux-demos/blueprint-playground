import { createBoard } from '@wixc3/react-board';
import { NavigationBar } from '../../../components/navigation-bar/navigation-bar';

export default createBoard({
    name: 'Navigation Bar',
    Board: () => <NavigationBar />,
    isSnippet: true,
});
