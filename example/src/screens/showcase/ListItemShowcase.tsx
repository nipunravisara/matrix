import React from 'react';
import {View} from 'react-native';
import {MIconButton, MListItem, MSheet} from '../../../../';

export default function ListItemShowcase() {
  return (
    <MSheet styles={{paddingTop: 50}}>
      <View>
        <MListItem
          title="Title"
          subtitle="subtitle"
          caption="23.23AP"
          prefix={<MIconButton iconName={'play-outline'} />}
        />
        <MListItem
          title="Title"
          subtitle="subtitle"
          caption="23.23AP"
          prefix={<MIconButton iconName={'pause-outline'} />}
        />
      </View>
    </MSheet>
  );
}
