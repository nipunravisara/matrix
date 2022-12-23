import React from 'react';
import {SafeAreaView} from 'react-native';
import {MIconButton, MListItem} from '../../../../';

export default function ListItemShowcase() {
  return (
    <SafeAreaView>
      <MListItem
        title="Title"
        subtitle="subtitle"
        caption="23.23AP"
        prefix={<MIconButton iconName={'arrowLeft'} />}
      />
      <MListItem
        title="Title"
        subtitle="subtitle"
        caption="23.23AP"
        prefix={<MIconButton iconName={'arrowLeft'} />}
      />
    </SafeAreaView>
  );
}
