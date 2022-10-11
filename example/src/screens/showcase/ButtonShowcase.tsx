import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { MButton } from 'matrix';

export default function ButtonShowcase() {
  return (
    <SafeAreaView>
      <View>
        <MButton title="Button" />
      </View>
    </SafeAreaView>
  );
}
