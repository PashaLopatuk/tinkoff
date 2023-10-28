import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Layout from '../../layout/Layout';
import Heading from '../../ui/Heading';
import Padding from '../../ui/Padding';
import {UI_GREY_500} from '../../../styles';
import Menu from './Menu';
import Currencies from './Currencies';

const More: FC = () => {
  return (
    <Layout>
      <Padding>
        <Heading text={'More'} />
        <Currencies />
        <Menu />
        <Text style={styles.versionText}>Version 5.20.6</Text>
      </Padding>
    </Layout>
  );
};

const styles = StyleSheet.create({
  versionText: {
    textAlign: 'center',
    color: UI_GREY_500,
    opacity: 50,
    marginVertical: 20,
  },
});

export default More;
