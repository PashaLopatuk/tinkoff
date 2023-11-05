import {StyleSheet} from 'react-native';
import { UI_BG } from '../../../../styles';

export default StyleSheet.create({
  container: {
    marginBottom: 16,
    backgroundColor: UI_BG,
    borderRadius: 15
  },
  item: {
    width: 56,
    height: 56,
    marginHorizontal: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  itemGradient: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemPercent: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderRightWidth: 27,
    borderTopWidth: 27,
    borderRightColor: 'transparent',
    borderTopColor: '#AAEF00',
    transform: [{rotate: '90deg'}],
  },
  itemPercentText: {
    fontSize: 10,
    width: 40,
    height: 40,
    position: 'absolute',
    top: -34,
    left: 7,
    transform: [{rotate: '-40deg'}],
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 6,
  },
});
