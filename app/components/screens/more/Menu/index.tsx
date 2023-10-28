import {Text, View} from 'react-native';
import {IMoreItem} from '../../../../types/IMoreItem';
import MenuItem from './MenuItem';

const START_URL = 'https://www.tinkoff.ru';
const MENU_LIST: IMoreItem[] = [
  {
    title: 'ATM machines',
    description: 'Search for Tinkoff ATMs and other banks in the map',
    iconName: 'university',
    link: `${START_URL}/maps/atm/`,
  },
  {
    title: 'Top up points',
    description: 'Cash replenishment in rubles, dollars, euros',
    iconName: 'money-check',
    link: `${START_URL}/maps/atm/`,
  },
  {
    title: 'Ordering certificates',
    description: 'Account statements by e-mail and in paper form',
    iconName: 'file-signature',
    link: `${START_URL}/maps/atm/`,
  },
  {
    title: 'For business',
    description: 'Online banking for small business',
    iconName: 'building',
    link: `${START_URL}/maps/atm/`,
  },
  {
    title: 'Communication',
    description:
      'By e-mail and in social networks, call via the internet and by phone',
    iconName: 'comment-alt',
    link: `${START_URL}/maps/atm/`,
  },
];
const Menu = () => {
  return (
    <View>
      {MENU_LIST.map(item => (
        <MenuItem key={item.title} item={item} />
      ))}
    </View>
  );
};

export default Menu;
