import {View, ViewStyle} from 'react-native';
import {FC, PropsWithChildren} from 'react';
import styles from './styles';

interface IPadding {
  style?: ViewStyle;
}

const Padding: FC<PropsWithChildren<IPadding>> = ({children, style}) => {
  return <View style={[styles.root, style]}>{children}</View>;
};

export default Padding;
