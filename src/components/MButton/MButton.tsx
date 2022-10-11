import React from 'react';
import { Text, View } from 'react-native';

export interface TMButton {
  title?: string;
  type?: 'primary' | 'secondary';
}

export default function MButton(props: TMButton) {
  const { title } = props;
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}
