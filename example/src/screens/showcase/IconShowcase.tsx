import React from 'react';
import {FlatList, SafeAreaView, TouchableOpacity, View} from 'react-native';
import {MIcon, MText} from 'matrix';

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
      <MIcon name={item.name} styles={{padding: 5}} />
      <View style={{marginLeft: 20}}>
        <MText content={item.title} />
      </View>
    </TouchableOpacity>
  );
};

export default function IconShowcase() {
  return (
    <SafeAreaView>
      <View style={{paddingHorizontal: 20}}>
        <FlatList<TIcons> data={icons} renderItem={RenderItem} />
      </View>
    </SafeAreaView>
  );
}
