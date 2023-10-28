import {StyleSheet} from 'react-native';
import {
  BOX_SHADOW,
  UI_BLUE_500,
  UI_GREY_500,
  UI_GREY_800,
} from '../../../../../styles';

export default StyleSheet.create({
  container: {
    marginTop: 16,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 12,
    justifyContent: 'space-between',
    ...BOX_SHADOW,
  },
  content: {
    width: '83.333333%',
  },
  contentTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: UI_GREY_800,
  },
  contentDescription: {
    fontSize: 13,
    color: UI_GREY_500,
    marginTop: 4,
    opacity: 0.9,
  },
  badge: {
    width: 36,
    height: 36,
    backgroundColor: UI_BLUE_500,
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
