import {Alert, Pressable, Text, TextInput, View, ViewStyle} from 'react-native';
import {FC, useState} from 'react';
import {useAuth} from '../../../../hooks/useAuth';
import styles from './styles';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {addDoc, collection, serverTimestamp} from 'firebase/firestore';
import {db} from '../../../../firebase';
// import Style from 'twrnc';

const InputField: FC = ({style={}}: {style?: ViewStyle}) => {
  const {user} = useAuth();
  const [message, setMessage] = useState('');

  const handleSendMessage = async () => {
    try {
      await addDoc(collection(db, 'messages'), {
        timestamp: serverTimestamp(),
        userId: user?.uid,
        text: message,
      });
    } catch (error: any) {
      Alert.alert('Error add new message', error);
    } finally {
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.field}
        placeholder={'Enter your message'}
        onChangeText={setMessage}
        value={message}
        showSoftInputOnFocus={false}
        autoCapitalize={'none'}
      />
      <Pressable onPress={handleSendMessage}>
        <FontAwesome5Icon
          name={'paper-plane'}
          size={24}
          style={styles.button}
        />
      </Pressable>
    </View>
  );
};

export default InputField;
