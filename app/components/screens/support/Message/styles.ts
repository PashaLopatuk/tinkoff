import {StyleSheet} from 'react-native';
import {
  UI_BLUE_500,
  UI_GREY_200,
  UI_GREY_700,
  UI_GREY_800,
} from '../../../../styles';

export default StyleSheet.create({
  item: {
    marginVertical: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: UI_GREY_200,
    alignSelf: 'flex-start',
  },
  itemByUser: {
    backgroundColor: UI_BLUE_500,
    alignSelf: 'flex-end',
  },
  itemText: {
    color: UI_GREY_800,
  },
  itemTextByUser: {
    color: '#FFFFFF',
  },
  itemTime: {
    fontSize: 10,
    color: UI_GREY_700,
    opacity: 0.7,
    marginLeft: 8,
  },
  itemTimeByUser: {
    color: '#FFF',
  },
});
