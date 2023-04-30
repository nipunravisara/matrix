import React from 'react';
import {View} from 'react-native';
import {
  MButton,
  MButtonVariations,
  MDivider,
  MDividerVariations,
  MSheet,
  MText,
  MTextVariant,
  MTitle,
  MTitleVariant,
} from '../../../../';

export default function ButtonShowcase() {
  return (
    <MSheet styles={{paddingTop: 20}}>
      <View>
        <MTitle type={MTitleVariant.h5} content="Resting state" />
        <View style={{marginVertical: 20}}>
          <MText type={MTextVariant.p3} content="Button primary" />
          <MButton title="Button" type={MButtonVariations.primary} />
          <MDivider type={MDividerVariations.Liner} />
        </View>
        <View style={{marginVertical: 20}}>
          <MText type={MTextVariant.p3} content="Button secondary" />
          <MButton title="Button" type={MButtonVariations.secondary} />
          <MDivider type={MDividerVariations.Liner} />
        </View>
        <View style={{marginVertical: 20}}>
          <MText type={MTextVariant.p3} content="Button ternary" />
          <MButton title="Button" type={MButtonVariations.ternary} />
          <MDivider type={MDividerVariations.Liner} />
        </View>

        <MTitle type={MTitleVariant.h5} content="Disabled state" />
        <View style={{marginVertical: 20}}>
          <MText type={MTextVariant.p3} content="Button primary" />
          <MButton title="Button" type={MButtonVariations.primary} disabled />
          <MDivider type={MDividerVariations.Liner} />
        </View>
        <View style={{marginVertical: 20}}>
          <MText type={MTextVariant.p3} content="Button secondary" />
          <MButton title="Button" type={MButtonVariations.secondary} disabled />
          <MDivider type={MDividerVariations.Liner} />
        </View>
        <View style={{marginVertical: 20}}>
          <MText type={MTextVariant.p3} content="Button ternary" />
          <MButton title="Button" type={MButtonVariations.ternary} disabled />
          <MDivider type={MDividerVariations.Liner} />
        </View>
      </View>
    </MSheet>
  );
}
