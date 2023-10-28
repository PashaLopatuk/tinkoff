import {Text, TouchableHighlight, View} from 'react-native';
import {FC} from 'react';
import {UI_YELLOW_300} from '../../../styles';
import styles from './styles';

interface IButton {
  onPress: () => void;
  title: string;
  colors?: [string, string];
}

export const Button: FC<IButton> = ({
  onPress,
  title,
  colors = [UI_YELLOW_300, '#FBBF24'],
}) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={colors[1]}
      style={[styles.root, {backgroundColor: colors[0]}]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
  );
};
