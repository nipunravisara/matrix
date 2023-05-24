import React from 'react';
import {ScrollView} from 'react-native';
import {
  MDivider,
  MJumbotron,
  MJumbotronAlignment,
  MJumbotronSizes,
  MSheet,
} from '../../../../';

export default function JumbotronShowcase() {
  return (
    <MSheet styles={{paddingTop: 20}}>
      <ScrollView>
        <MJumbotron
          title={'Lorem Ipsum'}
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          overline="Lorem"
          size={MJumbotronSizes.large}
        />
        <MDivider size={50} />
        <MJumbotron
          title={'Lorem Ipsum'}
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          overline="Lorem"
          size={MJumbotronSizes.medium}
        />
        <MDivider size={50} />
        <MJumbotron
          title={'Lorem Ipsum'}
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          overline="Lorem"
          size={MJumbotronSizes.small}
        />
        <MDivider size={100} />
        <MJumbotron
          title={'Lorem Ipsum'}
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          overline="Lorem"
          size={MJumbotronSizes.large}
          alignment={MJumbotronAlignment.center}
        />
        <MDivider size={50} />
        <MJumbotron
          title={'Lorem Ipsum'}
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          overline="Lorem"
          size={MJumbotronSizes.medium}
          alignment={MJumbotronAlignment.center}
        />
        <MDivider size={50} />
        <MJumbotron
          title={'Lorem Ipsum'}
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          overline="Lorem"
          size={MJumbotronSizes.small}
          alignment={MJumbotronAlignment.center}
        />
        <MDivider size={100} />
        <MJumbotron
          title={'Lorem Ipsum'}
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          overline="Lorem"
          size={MJumbotronSizes.large}
          alignment={MJumbotronAlignment.right}
        />
        <MDivider size={50} />
        <MJumbotron
          title={'Lorem Ipsum'}
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          overline="Lorem"
          size={MJumbotronSizes.medium}
          alignment={MJumbotronAlignment.right}
        />
        <MDivider size={50} />
        <MJumbotron
          title={'Lorem Ipsum'}
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          overline="Lorem"
          size={MJumbotronSizes.small}
          alignment={MJumbotronAlignment.right}
        />
      </ScrollView>
    </MSheet>
  );
}
