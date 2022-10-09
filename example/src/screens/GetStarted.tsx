import { useTheme } from 'matrix';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

export default function GetStarted() {
  const theme = useTheme();
  console.log(111, theme.dark);

  return (
    <SafeAreaView>
      <View>
        <Text>GetStarted</Text>
      </View>
    </SafeAreaView>
  );
}
