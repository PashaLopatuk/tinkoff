import React, {FC} from 'react';
import Header from '../../ui/Header';
import Layout from '../../layout/Layout';
import Stories from '../../ui/Stories';
import Accounts from './accounts/Accounts';
import ApplyNewProducts from './ApplyNewProducts/index';
import Search from '../../ui/search/Search';
import Services from './Services/Services'

const Home: FC = () => {

  const searhIcon = require('../../../../assets/icons/search.svg');

  return (
    <Layout>
      <Header />
      <Search icon={searhIcon}/>
        <Stories />
      <Services />
      <Accounts />
      <ApplyNewProducts />
    </Layout>
  );
};

export default Home;
