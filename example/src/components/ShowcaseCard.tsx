import React from 'react';
import {TouchableOpacity} from 'react-native';
import {MLabel} from 'matrix';
import {useNavigation} from '@react-navigation/native';

interface TShowcaseCard {
  name: string;
  image: string;
  screenName: string;
}

export default function ShowcaseCard(props: TShowcaseCard) {
  const {name, screenName} = props;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'white',
        flex: 1,
        margin: 5,
        padding: 10,
      }}
      onPress={() => navigation.navigate(screenName as never)}
    >
      <MLabel content={name} />
    </TouchableOpacity>
  );
}
