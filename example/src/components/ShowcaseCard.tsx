import React from 'react';
import {TouchableOpacity} from 'react-native';
import {MLabel, useTheme} from '../../../';
import {useNavigation} from '@react-navigation/native';

interface TShowcaseCard {
  name: string;
  image: string;
  screenName: string;
}

export default function ShowcaseCard(props: TShowcaseCard) {
  const {name, screenName} = props;
  const navigation = useNavigation();
  const {isDark} = useTheme();

  return (
    <TouchableOpacity
      style={{
        backgroundColor: isDark ? 'black' : 'white',
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
