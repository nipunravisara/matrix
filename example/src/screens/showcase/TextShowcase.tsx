import {MText, MTextVariant} from '../../../../';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export default function TextShowcase() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={{marginVertical: 20}}>p1</Text>
        <MText
          type={MTextVariant.p1}
          content={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
          }
        />
        <Text style={{marginVertical: 20}}>p2</Text>
        <MText
          type={MTextVariant.p2}
          content={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
          }
        />
        <Text style={{marginVertical: 20}}>p3</Text>
        <MText
          type={MTextVariant.p3}
          content={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
          }
        />
        <Text style={{marginVertical: 20}}>p4</Text>
        <MText
          type={MTextVariant.p4}
          content={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
          }
        />
        <Text style={{marginVertical: 20}}>p5</Text>
        <MText
          type={MTextVariant.p5}
          content={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
}
