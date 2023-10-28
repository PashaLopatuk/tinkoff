import {Text, View} from 'react-native';
import styles from './styles';

interface INotification {
  text: string;
}

export const Notification = ({text}: INotification) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{text}</Text>
    </View>
  );
};
