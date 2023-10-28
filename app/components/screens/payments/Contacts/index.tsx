import { ScrollView, View } from 'react-native';
import { useContacts } from '../../../../hooks/useContacts';
import styles from './styles';
import ContactsItem from './ContactsItem';
import Loader from '../../../ui/Loader';
import SubHeading from '../../../ui/SubHeading';
import tw from 'twrnc'
import Padding from '../../home/Padding';


const Contacts = () => {
  const { contacts, isLoading } = useContacts();

  return (
    <Padding>
      <View style={{ ...styles.container, ...tw`my-2 rounded-xl` }}>
        <SubHeading text="Phone transfers" />
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
