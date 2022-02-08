import React from 'react';
import {View, Text} from 'react-native';

const WinqOverview = () => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
        borderRadius: 16,
        padding: 16,
        shadowColor: 'rgba(0,0,0,0.1)',
        shadowOffset: {
          width: -4,
          height: -4,
        },
        elevation: 1,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingBottom: 32,
        }}>
        <Text
          style={{
            backgroundColor: 'tomato',
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 50,
            height: 32,
            textAlign: 'center',
            color: '#fff',
          }}>
          Requested: $25
        </Text>

        <Text
          style={{
            backgroundColor: 'green',
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 50,
            height: 32,
            textAlign: 'center',
            color: '#fff',
          }}>
          Total: $125
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 40,
            width: 40,
            backgroundColor: 'rgba(255,140,0, 0.3)',
            borderRadius: 40,
          }}
        />

        <View style={{marginLeft: 24}}>
          <Text style={{}}>Trip to lisbon</Text>
          <Text style={{marginTop: 12}}>2 of 2 paid</Text>
        </View>
      </View>
    </View>
  );
};

export default WinqOverview;
