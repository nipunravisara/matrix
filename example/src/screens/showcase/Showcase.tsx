import React from 'react';
import {FlatList, View} from 'react-native';
import {MHeader, MSheet} from '../../../../';
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
    name: 'Icon Button',
    image: '',
    screenName: 'IconButtonShowcase',
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
    name: 'Text Input',
    image: '',
    screenName: 'TextInputShowcase',
  },
  {
    name: 'Title',
    image: '',
    screenName: 'TitleShowcase',
  },
  {
    name: 'List Item',
    image: '',
    screenName: 'ListItemShowcase',
  },
  {
    name: 'Modal',
    image: '',
    screenName: 'ModalShowcase',
  },
  {
    name: 'Divider',
    image: '',
    screenName: 'DividerShowcase',
  },
  {
    name: 'Jumbotron',
    image: '',
    screenName: 'JumbotronShowcase',
  },
];

export default function Showcase(props: TShowcase) {
  return (
    <MSheet>
      <View>
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
      </View>
    </MSheet>
  );
}
