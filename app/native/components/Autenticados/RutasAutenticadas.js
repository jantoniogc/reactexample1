import { TabNavigator } from 'react-navigation';
import StackHome from './StackHome';
import Add from './Add';
import Profile from './Profile';
import StackSearch from './StackSearch';
import StackFollow from './StackFollow';

const RutasAutenticadas = TabNavigator(
  {
    Home: {
      screen: StackHome,
    },
    Search: {
      screen: StackSearch,
    },
    Add: {
      screen: Add,
    },
    Folow: {
      screen: StackFollow,
    },
    Profile: {
      screen: Profile,
    },
  },
  {
    tabBarPosition: 'bottom',
    lazy: true,
  },
);

export default RutasAutenticadas;
