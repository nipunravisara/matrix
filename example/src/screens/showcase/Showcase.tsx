import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {useForm} from 'react-hook-form';
import {FlatList, View} from 'react-native';
import {MDivider, MSheet, MText, MTextInput, MTitle} from '../../../../';
import ShowcaseCard from '../../components/ShowcaseCard';
import type {RootStackParamList} from '../../navigation/Navigator';

interface FormTypes {
  searchTerm: string;
}

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
  const {
    control,
    formState: {errors},
  } = useForm<FormTypes>({
    defaultValues: {
      searchTerm: '',
    },
  });

  return (
    <MSheet>
      <View style={{padding: 20}}>
        <MTitle content={'Build the incredible'} />
        <MText
          content={
            'Build your idea from design to the final product and deliver faster.'
          }
        />
        <MDivider size={50} />
        <MTextInput
          name="searchTerm"
          placeholder="Search components"
          control={control}
          errors={errors}
        />
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
    </MSheet>
  );
}
