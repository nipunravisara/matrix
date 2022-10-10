import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import { MTitle, MTitleVariant } from 'matrix';

export default function TitleShowcase() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={{ marginVertical: 20 }}>h1</Text>
        <MTitle
          type={MTitleVariant.h1}
          content={'Lorem ipsum dolor sit amet'}
        />
        <Text style={{ marginVertical: 20 }}>h2</Text>
        <MTitle
          type={MTitleVariant.h2}
          content={'Lorem ipsum dolor sit amet'}
        />
        <Text style={{ marginVertical: 20 }}>h3</Text>
        <MTitle
          type={MTitleVariant.h3}
          content={'Lorem ipsum dolor sit amet'}
        />
        <Text style={{ marginVertical: 20 }}>h4</Text>
        <MTitle
          type={MTitleVariant.h4}
          content={'Lorem ipsum dolor sit amet'}
        />
        <Text style={{ marginVertical: 20 }}>h5</Text>
        <MTitle
          type={MTitleVariant.h5}
          content={'Lorem ipsum dolor sit amet'}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
