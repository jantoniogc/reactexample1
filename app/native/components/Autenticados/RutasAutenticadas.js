import { TabNavigator } from 'react-navigation';
import StackHome from './StackHome';
import Profile from './Profile';
import StackSearch from './StackSearch';
import StackFollow from './StackFollow';
import StackAdd from './StackAdd';

const RutasAutenticadas = TabNavigator(
  {
    Home: {
      screen: StackHome,
    },
    Search: {
      screen: StackSearch,
    },
    Add: {
      screen: StackAdd,
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
