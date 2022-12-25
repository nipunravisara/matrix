import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {MIcon, MSheet, MText} from '../../../../';

interface TIcons {
  name: string;
}

const icons: TIcons[] = [
  {
    name: 'eye-outline',
  },
  {
    name: 'eye-bold',
  },
  {
    name: 'eye-bulk',
  },
  {
    name: 'eye-twotone',
  },
  {
    name: 'eye-slash-outline',
  },
  {
    name: 'eye-slash-bold',
  },
  {
    name: 'eye-slash-bulk',
  },
  {
    name: 'eye-slash-twotone',
  },
  {
    name: 'arrow-left-outline',
  },
  {
    name: 'arrow-left-bold',
  },
  {
    name: 'arrow-left-bulk',
  },
  {
    name: 'arrow-left-twotone',
  },
  {
    name: 'microphone-two-outline',
  },
  {
    name: 'microphone-two-bold',
  },
  {
    name: 'microphone-two-bulk',
  },
  {
    name: 'microphone-two-twotone',
  },
  {
    name: 'pause-outline',
  },
  {
    name: 'pause-bold',
  },
  {
    name: 'pause-bulk',
  },
  {
    name: 'pause-twotone',
  },
  {
    name: 'stop-outline',
  },
  {
    name: 'stop-bold',
  },
  {
    name: 'stop-bulk',
  },
  {
    name: 'stop-twotone',
  },
  {
    name: 'music-playlist-outline',
  },
  {
    name: 'music-playlist-bold',
  },
  {
    name: 'music-playlist-bulk',
  },
  {
    name: 'music-playlist-twotone',
  },
  {
    name: 'play-outline',
  },
  {
    name: 'play-bold',
  },
  {
    name: 'play-bulk',
  },
  {
    name: 'play-twotone',
  },

  {
    name: 'trash-outline',
  },
  {
    name: 'trash-bold',
  },
  {
    name: 'trash-bulk',
  },
  {
    name: 'trash-twotone',
  },

  {
    name: 'directbox-send-outline',
  },
  {
    name: 'directbox-send-bold',
  },
  {
    name: 'directbox-send-bulk',
  },
  {
    name: 'directbox-send-twotone',
  },
];

const RenderItem = ({item}: {item: TIcons}) => {
  return (
    <TouchableOpacity
      style={{
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
      }}
    >
      <MIcon iconName={item.name} />
      <View style={{marginLeft: 10}}>
        <MText content={item.name} />
      </View>
    </TouchableOpacity>
  );
};

export default function IconShowcase() {
  return (
    <MSheet>
      <FlatList<TIcons> data={icons} renderItem={RenderItem} />
    </MSheet>
  );
}
