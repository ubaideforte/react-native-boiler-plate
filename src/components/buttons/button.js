import React from 'react';
import {View, Text} from 'react-native';

const AddButton = () => {
  return (
    <View
      style={{
        borderRadius: 50,
        backgroundColor: '#012169',
        width: 56,
        height: 56,
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
          }}>
          +
        </Text>
      </View>
    </View>
  );
};

export default AddButton;
