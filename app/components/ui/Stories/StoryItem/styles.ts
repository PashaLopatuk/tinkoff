import {StyleSheet} from 'react-native';
import {UI_BLUE_400} from '../../../../styles';

export default StyleSheet.create({
  container: {
    width: 96,
    height: 96,
    padding: 2,
    marginLeft: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: UI_BLUE_400,
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  imageStyle: {
    borderRadius: 12,
  },
  heading: {
    color: '#FFFFFF',
    fontSize: 12,
    margin: 8,
  },
});
