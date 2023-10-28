import React, {FC} from 'react';
import {Text} from 'react-native';
import {useProfile} from '../../../hooks/useProfile';
import Layout from '../../layout/Layout';
import Heading from '../../ui/Heading';
import Padding from '../../ui/Padding';
import Loader from '../../ui/Loader';
import Field from '../../ui/Field';
import Button from '../../ui/Button';
import {useAuth} from '../../../hooks/useAuth';
import {UI_GREY_200} from '../../../styles';
import {useUpdateProfile} from '../../../hooks/useUpdateProfile';
import {Notification} from '../../ui/Notification';

const Profile: FC = () => {
  const {logout} = useAuth();
  const {isLoading: isProfileLoading, name, setName, profile} = useProfile();

  const {
    isLoading: isProfileUpdateLoading,
    isSuccess,
    updateProfile,
  } = useUpdateProfile(name, profile.docId);

  return (
    <Layout>
      <Heading text={'Profile'} isCenter={true} />
      <Padding>
        {isSuccess && <Notification text={'Profile updated successfully'} />}
        {isProfileLoading || isProfileUpdateLoading ? (
          <Loader />
        ) : (
          <>
            <Field onChange={setName} value={name} placeholder={'No name'} />

            <Button onPress={updateProfile} title={'Update profile'} />

            <Button
              onPress={logout}
              title={'Logout'}
              colors={[UI_GREY_200, '#D6D8DB']}
            />
          </>
        )}
      </Padding>
    </Layout>
  );
};

export default Profile;
