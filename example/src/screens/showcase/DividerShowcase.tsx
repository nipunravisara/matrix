import React from 'react';
import {View} from 'react-native';
import {MDivider, MDividerVariations, MSheet, MText} from '../../../../';

export default function DividerShowcase() {
  return (
    <MSheet styles={{marginTop: 20}}>
      <View>
        <MDivider type={MDividerVariations.Liner} />
        <MText content="Liner" />
        <MDivider type={MDividerVariations.Section} />
        <MText content="Section" />
        <MDivider />
        <MText content="Default" />
      </View>
    </MSheet>
  );
}
