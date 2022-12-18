import React from 'react';
import {SafeAreaView, ViewStyle} from 'react-native';
import {MHeaderStyles} from './getSheetStyles';

export interface TMSheet {
  children: JSX.Element;
  styles?: ViewStyle;
}

export default function MSheet(props: TMSheet) {
  const {children, styles} = props;

  return (
    <SafeAreaView style={[MHeaderStyles(props).conatiner, styles]}>
      {children}
    </SafeAreaView>
  );
}
