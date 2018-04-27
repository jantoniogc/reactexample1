import { StackNavigator } from 'react-navigation';

import Publicacion from './Publicacion';
import Profile from './Profile';
import Comentarios from './Comentarios';
import TabFollow from './TabFollow';

const StackFollow = StackNavigator({
  TabFollow: {
    screen: TabFollow,
    navigationOptions: {
      header: null
    }
  },
  Autor: {
    screen: Profile
  },
  Publicacion: {
    screen: Publicacion
  },
  Comentarios: {
    screen: Comentarios
  }
});

export default StackFollow;
