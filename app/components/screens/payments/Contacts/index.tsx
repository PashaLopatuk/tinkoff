import {Pressable, ScrollView, Text, View} from 'react-native';
import { useContacts } from '../../../../hooks/useContacts';
import styles from './styles';
import ContactsItem from './ContactsItem';
import Loader from '../../../ui/Loader';
import SubHeading from '../../../ui/SubHeading';
import tw from 'twrnc'
import Padding from '../../home/Padding';
import React, { useState } from 'react';
import { IContact } from './types';
import Search from '../../../ui/search/Search';
import { UI_BG } from '../../../../styles';


const Contacts = () => {
  // const { contacts, isLoading } = useContacts();
  // const [contacts, setContacts] = useState<IContact[]>([]);
  const contacts: IContact[] = [
    {
      _id: 'john',
      displayName: 'John',
      cardNumber: '',
    },
    {
      _id: 'adam',
      displayName: 'Adam',
      cardNumber: '',
    },
    {
      _id: 'tomas',
      displayName: 'Tomas',
      cardNumber: '',
    },
    {
      _id: 'jerry',
      displayName: 'Jerry',
      cardNumber: '',
    },
  ]
  const isLoading = false;

  return (
    <Padding>
      <View style={{ ...styles.container, ...tw`my-2 rounded-xl py-3` }}>
        <View style={tw`flex-row justify-between mb-2`}>
          <SubHeading text="Phone transfers" />
          <Pressable onPress={() => {}}>
            <Text style={tw`text-blue-500 font-bold text-lg mr-3`}>All</Text>
          </Pressable>
        </View>

        <Search styleTw={`bg-${UI_BG}`} style={tw`bg-[#F6F7F9] mb-5`}/>
        {isLoading ? (
          <Loader />
        ) : (
          <ScrollView
            style={styles.scrollView}
            showsHorizontalScrollIndicator={false}
            horizontal={true}>
            {contacts.map(contact => (
              <ContactsItem key={contact._id} contact={contact} />
            ))}
          </ScrollView>
        )}
      </View>
    </Padding>
  );
};

export default Contacts;
