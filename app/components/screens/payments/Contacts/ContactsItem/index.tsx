import {Pressable, Text, View} from 'react-native';
import {FC} from 'react';
import {IContact} from '../types';
import styles from './styles';
import Avatar from '../../../../ui/Avatar';
import {handleTransfer} from '../../handleTransfer';
import {useAccounts} from '../../../../../hooks/useAccounts';

const ContactsItem: FC<{contact: IContact}> = ({contact}) => {
  const {accounts} = useAccounts();

  return (
    <Pressable
      style={styles.container}
      onPress={handleTransfer.bind(this, accounts[0], contact.cardNumber)}>
      <Avatar size={'large'} name={contact.displayName} />
      <Text style={styles.label}>{contact.displayName}</Text>
    </Pressable>
  );
};

export default ContactsItem;
