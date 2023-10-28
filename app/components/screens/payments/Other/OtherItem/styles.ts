import {StyleSheet} from 'react-native';
import {BOX_SHADOW, UI_BLUE_500} from '../../../../../styles';

export default StyleSheet.create({
  container: {
    marginLeft: 20,
    borderRadius: 12,
    padding: 8,
    width: 96,
    height: 96,
    backgroundColor: '#FFFFFF',
    ...BOX_SHADOW,
  },
  icon: {
    width: 24,
    height: 24,
    borderRadius: 9999,
    backgroundColor: UI_BLUE_500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    marginTop: 6,
  },
});
