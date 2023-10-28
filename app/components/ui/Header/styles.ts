import {StyleSheet} from 'react-native';
import {UI_GREY_800} from '../../../styles';

export default StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  pressable: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 24,
    color: UI_GREY_800,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  icon: {
    color: UI_GREY_800,
    marginLeft: 12,
  },
});
