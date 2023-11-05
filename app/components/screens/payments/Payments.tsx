import React, {FC} from 'react';
import Layout from '../../layout/Layout';
import Heading from '../../ui/Heading';
import Contacts from './Contacts';
import Other from './Other';
import Search from '../../ui/search/Search';
import Favories from './Favorites/Favories';
import Transfers from "./Transfers/Transfers";

const Payments: FC = ({navigate}: {navigate: () => void}) => {
  return (
    <Layout>
      <Heading text={'Payments'} />
      <Search styleTw='my-5'/>
      <Favories />
      <Contacts />
      <Transfers navigate={navigate}/>
      <Other />
    </Layout>
  );
};

export default Payments;
