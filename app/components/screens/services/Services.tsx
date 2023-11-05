import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Layout from '../../layout/Layout';
import {services} from './data';
import ServiceItem from './ServiceItem';
import Heading from '../../ui/Heading';

const Services: FC = () => {
  return (
    <Layout>
      <Heading text='Services'/>
      <Text style={styles.title}> /</Text>
      <View style={styles.container}>
        {services.map(service => (
          <ServiceItem key={service.title} service={service} />
        ))}
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 24,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export default Services;
