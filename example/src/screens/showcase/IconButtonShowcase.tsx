import React from 'react';
import {FlatList, View} from 'react-native';
import {
  MIconButton,
  MIconButtonSize,
  MIconButtonVariations,
  MSheet,
  TMIconButton,
} from '../../../../';

const primaryIcons: TMIconButton[] = [
  {
    iconName: 'eye-outline',
    type: MIconButtonVariations.Primary,
    size: MIconButtonSize.Large,
  },
  {
    iconName: 'eye-outline',
    type: MIconButtonVariations.Primary,
    color: 'red',
  },
  {
    iconName: 'eye-outline',
    type: MIconButtonVariations.Primary,
    size: MIconButtonSize.Small,
  },
  {
    iconName: 'eye-outline',
    type: MIconButtonVariations.Primary,
    size: MIconButtonSize.Large,
    disabled: true,
  },
];

const secondaryIcons: TMIconButton[] = [
  {
    iconName: 'arrow-left-outline',
    size: MIconButtonSize.Large,
  },
  {
    iconName: 'arrow-left-outline',
  },
  {
    iconName: 'arrow-left-outline',
    size: MIconButtonSize.Small,
  },
  {
    iconName: 'arrow-left-outline',
    size: MIconButtonSize.Large,
    disabled: true,
  },
];

const RenderItem = ({item}: {item: TMIconButton}) => {
  return (
    <View
      style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10}}
    >
      <MIconButton
        iconName={item.iconName}
        type={item.type}
        color={item.color}
        size={item.size}
        styles={{padding: 5}}
        disabled={item.disabled}
      />
    </View>
  );
};

export default function IconButtonShowcase() {
  return (
    <MSheet>
      <View>
        <View style={{paddingHorizontal: 20, marginTop: 30}}>
          <FlatList<TMIconButton> data={primaryIcons} renderItem={RenderItem} />
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 30}}>
          <FlatList<TMIconButton>
            data={secondaryIcons}
            renderItem={RenderItem}
          />
        </View>
      </View>
    </MSheet>
  );
}
