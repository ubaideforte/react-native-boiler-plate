import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Button,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import WinqOverview from '../src/components/cards/winqOverview';
import AddButton from '../src/components/buttons/button';

const Home = () => {
  const navigation = useNavigation();
  const [myModal, toggleModal] = useState(false);

  return (
    <View>
      <Text
        onPress={() => {
          navigation.navigate('Details');
        }}>
        This is Home
      </Text>

      <View>
        <Button
          title="My Button"
          onPress={() => {
            toggleModal(true);
          }}
        />
      </View>
      <View
        style={{
          padding: 20,
        }}>
        <WinqOverview />
      </View>
      <AddButton />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:
      'linear-gradient(0deg, rgba(35, 0, 246, 0.65), rgba(35, 0, 246, 0.65)), rgba(139, 74, 74, 0.75)',
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#fff',
    fontFamily: 'calibari',
  },
  versionNumber: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'calibari',
  },
  containerContent: {flex: 1, marginTop: 40},
  containerHeader: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: '#F1F1F1',
  },
  headerContent: {
    marginTop: 0,
  },
  Modal: {
    backgroundColor: '#005252',
    marginTop: 0,
  },
});
