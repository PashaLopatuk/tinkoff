import {StyleSheet} from 'react-native';
import { UI_BG } from '../../../styles';
// import {UI_GREY_800} from '../../../styles';
export default StyleSheet.create({
  container: {
    height: '100%',
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: UI_BG
  },
  content: {
    width: '75%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 8,
  },
  pressableButton: {
    color: 'gray',
    // color: UI_GREY_800,
    fontSize: 14,
    opacity: 0.3,
    textAlign: 'right',
  },
});
