import {StyleSheet} from 'react-native';
import {UI_BLUE_500} from '../../../../../styles';

export default StyleSheet.create({
  container: {
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  currency: {
    width: 36,
    height: 36,
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: UI_BLUE_500,
  },
  currencyCircle: {
    width: 20,
    height: 20,
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EDF4FE',
  },
  balance: {
    width: '66.66%',
  },
  balanceName: {
    fontSize: 14,
  },
  balanceValue: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 2,
  },
  image: {
    width: 56,
    height: 40,
    padding: 4,
    justifyContent: 'flex-end',
  },
  imageLabel: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 10,
  },
});
