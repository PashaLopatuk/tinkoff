import {StyleSheet} from 'react-native';
import {UI_GREY_500, UI_GREY_800} from '../../../../styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    marginBottom: 8,
    marginTop: 4,
  },
  img: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  title: {
    fontSize: 14,
    color: UI_GREY_800,
  },
  subtitle: {
    fontSize: 12,
    color: UI_GREY_500,
  },
});
