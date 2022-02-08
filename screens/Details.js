import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Button,
  FlatList,
} from 'react-native';
import SwipeUpDownModal from 'react-native-swipe-modal-up-down';

const data = [
  {
    id: 1,
    title: 'First',
  },
  {
    id: 2,
    title: 'Second Item',
  },
  {
    id: 3,
    title: 'Third Item',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text>{title}</Text>
  </View>
);

const Details = () => {
  const [myModal, toggleModal] = useState(false);

  return (
    <View>
      <Text>This is Home</Text>

      <View>
        <Button
          title="My Button"
          onPress={() => {
            toggleModal(true);
          }}
        />
      </View>

      <SwipeUpDownModal
        duration={500}
        modalVisible={myModal}
        PressToanimate={true}
        HeaderStyle={styles.headerContent}
        ContentModalStyle={styles.Modal}
        //if you don't pass HeaderContent you should pass marginTop in view of ContentModel to Make modal swipeable
        ContentModal={
          <View style={styles.containerContent}>
            <FlatList
              data={data}
              renderItem={({item, index}) => (
                <Item key={index} title={item.title} />
              )}
              keyExtractor={item => item.id}
            />
          </View>
        }
        HeaderContent={
          <View
            style={{
              borderColor: 'orange',
              borderTopRightRadius: 24,
              borderTopLeftRadius: 24,
              padding: 16,
              backgroundColor: 'yellow',
            }}>
            <TouchableHighlight
              onPress={() => {
                toggleModal(false);
              }}>
              <View>
                <Text>X</Text>
              </View>
            </TouchableHighlight>
          </View>
        }
        onClose={() => {
          console.log('Closed by dragging');
          toggleModal(false);
        }}
      />
    </View>
  );
};

export default Details;

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
