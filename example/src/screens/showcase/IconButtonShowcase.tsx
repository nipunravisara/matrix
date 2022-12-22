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
    iconName: 'arrowExpand',
    type: MIconButtonVariations.Primary,
    size: MIconButtonSize.Large,
  },
  {
    iconName: 'chevronLeft',
    type: MIconButtonVariations.Primary,
    color: 'red',
  },
  {
    iconName: 'chevronLeft',
    type: MIconButtonVariations.Primary,
    size: MIconButtonSize.Small,
  },
];

const secondaryIcons: TMIconButton[] = [
  {
    iconName: 'arrowExpand',
    size: MIconButtonSize.Large,
  },
  {
    iconName: 'chevronLeft',
  },
  {
    iconName: 'chevronLeft',
    size: MIconButtonSize.Small,
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
