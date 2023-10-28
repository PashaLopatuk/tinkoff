import React, {FC} from 'react';
import Layout from '../../layout/Layout';
import Heading from '../../ui/Heading';
import Contacts from './Contacts';
import Other from './Other';
import Search from '../../ui/search/Search';


const Payments: FC = () => {
  return (
    <Layout>
      <Heading text={'Payments'} />
      <Search styleTw=''/>
      <Contacts />
      <Other />
    </Layout>
  );
};

export default Payments;
