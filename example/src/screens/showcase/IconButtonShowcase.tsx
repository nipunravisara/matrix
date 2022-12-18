import React from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {MIconButton, MText} from '../../../../';

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
    <View
      style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10}}
    >
      <MIconButton iconName={item.name} styles={{padding: 5}} />
      <View style={{marginLeft: 20}}>
        <MText content={item.title} />
      </View>
    </View>
  );
};

export default function IconButtonShowcase() {
  return (
    <SafeAreaView>
      <View style={{paddingHorizontal: 20, marginTop: 30}}>
        <FlatList<TIcons> data={icons} renderItem={RenderItem} />
      </View>
    </SafeAreaView>
  );
}
