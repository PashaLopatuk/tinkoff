import React, {FC} from 'react';
import {ScrollView, Text} from 'react-native';
import Layout from '../../layout/Layout';
import Padding from '../../ui/Padding';
import Header from './Header';
import Message from './Message';
import {useMessages} from '../../../hooks/useMessages';
import InputField from './InputField';
import tw from 'twrnc'

const Support: FC = () => {
  const {messages} = useMessages();

  return (
    <Layout isScrollView={false}>
      <Padding style={tw`mt-10`}>
        <Header />
        <ScrollView style={{height: '83%'}}>
          {messages.map(message => (
            <Message key={message._id} message={message} />
          ))}
        </ScrollView>
        <InputField/>
      </Padding>
    </Layout>
  );
};

export default Support;
