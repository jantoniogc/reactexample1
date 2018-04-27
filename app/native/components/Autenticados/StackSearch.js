import { StackNavigator } from 'react-navigation';
import Search from './Search';
import Publicacion from './Publicacion';
import Profile from './Profile';
import Comentarios from './Comentarios';

const StackSearch = StackNavigator({
  Search: {
    screen: Search
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

export default StackSearch;
