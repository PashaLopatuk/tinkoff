import {StyleSheet} from 'react-native';
import {UI_GREY_300} from '../../../styles';

export default StyleSheet.create({
  root: {
    width: 48,
    height: 48,
    borderRadius: 9999,
    backgroundColor: UI_GREY_300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rootSmall: {
    width: 36,
    height: 36,
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: '#FFF',
  },
  textSmall: {
    fontSize: 18,
  },
});
