import {Text, View} from 'react-native';
import {FC} from 'react';
import {IMessage} from '../../../../types/IMessage';
import {useAuth} from '../../../../hooks/useAuth';
import styles from './styles';

const Message: FC<{message: IMessage}> = ({message}) => {
  const {user} = useAuth();

  const isMsgByAuthUser = user?.uid === message.userId;

  return (
    <View style={[styles.item, isMsgByAuthUser && styles.itemByUser]}>
      <Text style={[styles.itemText, isMsgByAuthUser && styles.itemTextByUser]}>
        {message.text}
      </Text>
      <Text style={[styles.itemTime, isMsgByAuthUser && styles.itemTimeByUser]}>
        {message.timestamp?.toString()}
      </Text>
    </View>
  );
};

export default Message;
