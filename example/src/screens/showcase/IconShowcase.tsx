import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {MIcon, MSheet, MText} from '../../../../';

interface TIcons {
  name: string;
  title: string;
}

const icons: TIcons[] = [
  {
    name: 'arrowExpand',
    title: 'Arrow expand',
  },
  {
    name: 'chevronLeft',
    title: 'Chevron left',
  },
];

const RenderItem = ({item}: {item: TIcons}) => {
  return (
    <TouchableOpacity
      style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10}}
    >
      <MIcon iconName={item.name} styles={{padding: 5}} />
      <View style={{marginLeft: 20}}>
        <MText content={item.title} />
      </View>
    </TouchableOpacity>
  );
};

export default function IconShowcase() {
  return (
    <MSheet styles={{marginTop: 25}}>
      <FlatList<TIcons> data={icons} renderItem={RenderItem} />
    </MSheet>
  );
}
