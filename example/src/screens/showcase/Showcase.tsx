import React from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {MHeader} from 'matrix';
import ShowcaseCard from '../../components/ShowcaseCard';
import type {RootStackParamList} from '../../navigation/Navigator';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type TShowcase = NativeStackScreenProps<RootStackParamList, 'Showcase'>;

const components = [
  {
    name: 'Button',
    image: '',
    screenName: 'ButtonShowcase',
  },
  {
    name: 'Header',
    image: '',
    screenName: 'HeaderShowcase',
  },
  {
    name: 'Icon',
    image: '',
    screenName: 'IconShowcase',
  },
  {
    name: 'Label',
    image: '',
    screenName: 'LabelShowcase',
  },
  {
    name: 'Text',
    image: '',
    screenName: 'TextShowcase',
  },
  {
    name: 'Title',
    image: '',
    screenName: 'TitleShowcase',
  },
];
export default function Showcase(props: TShowcase) {
  console.log(props);

  return (
    <SafeAreaView>
      <MHeader
        title="Showcase"
        styles={{backgroundColor: 'transparent', borderColor: 'transparent'}}
        titleStyles={{fontSize: 24, color: '#fff'}}
      />
      <View>
        <FlatList
          data={components}
          numColumns={2}
          renderItem={({item}) => (
            <ShowcaseCard
              name={item.name}
              image={item.image}
              screenName={item.screenName}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
