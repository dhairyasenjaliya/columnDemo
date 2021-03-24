import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import Contacts from 'react-native-contacts';
import ScreenHeader from '../../components/headerComponent';
import DisplayContactInfo from '../../components/displayContactInfo';

interface IProps {
  navigation: Object;
}

const ContactScreen: React.FC<IProps> = ({}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [contact, setContact] = useState<Object>([]);

  useEffect(() => {
    // console.log(`Any state changed Name: , Address: `);
    Contacts.getAll().then(data => {
      if (data) {
        if (data) {
          setContact(data);
        }
      }
    });
  }, [contact]);

  return (
    <View style={styles.container}>
      <ScreenHeader title={'My Contacts'} />
      <FlatList
        data={contact}
        renderItem={data => {
          return <DisplayContactInfo data={data.item} />;
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
export default ContactScreen;
