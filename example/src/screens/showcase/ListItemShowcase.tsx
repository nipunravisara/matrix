import React from 'react';
import {View, Text} from 'react-native';
import {MIconButton, MListItem, MSheet, MText} from '../../../../';

export default function ListItemShowcase() {
  return (
    <MSheet styles={{paddingTop: 50}}>
      <View>
        <MListItem
          title="Title"
          subtitle="07:35 AM"
          caption="23.23AP"
          prefix={<MIconButton iconName={'pause-outline'} />}
          options={[
            <MIconButton key="share" iconName={'music-playlist-outline'} />,
            <MIconButton key="delete" iconName={'pause-outline'} />,
          ]}
        />
        <MListItem title="Title" subtitle="subtitle" caption="23.23AP" />
        <MListItem
          title="Title"
          subtitle="07:35 AM"
          caption="23.23AP"
          prefix={<MIconButton iconName={'pause-outline'} />}
        />
      </View>
    </MSheet>
  );
}
