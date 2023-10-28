import {StyleSheet} from 'react-native';
import {BOX_SHADOW, UI_GREY_400, UI_GREY_800} from '../../../../styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 24,
    backgroundColor: '#FFF',
    paddingVertical: 12,
    justifyContent: 'center',
    ...BOX_SHADOW,
  },
  item: {
    fontSize: 12,
    width: '33.333333%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  itemName: {
    color: UI_GREY_400,
    marginRight: 4,
  },
  itemValue: {
    color: UI_GREY_800,
  },
});
