import {StyleSheet} from 'react-native';
import {UI_BLUE_500, UI_GREY_100} from '../../../../styles';

export default StyleSheet.create({
  container: {
    marginTop: 12,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  field: {
    backgroundColor: UI_GREY_100,
    borderRadius: 12,
    padding: 12,
    height: 40,
    width: '83.33%',
  },
  button: {
    padding: 8,
    color: UI_BLUE_500,
  },
});
