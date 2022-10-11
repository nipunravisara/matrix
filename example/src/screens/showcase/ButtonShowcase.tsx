import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { MButton, MButtonVariations, MTitle, MTitleVariant } from 'matrix';

export default function ButtonShowcase() {
  return (
    <SafeAreaView>
      <MTitle type={MTitleVariant.h5} content="Resting state" />
      <View>
        <Text style={{ marginVertical: 20 }}>Button primary</Text>
        <MButton title="Button" type={MButtonVariations.primary} />
      </View>
      <View>
        <Text style={{ marginVertical: 20 }}>Button secondary</Text>
        <MButton title="Button" type={MButtonVariations.secondary} />
      </View>
      <View>
        <Text style={{ marginVertical: 20 }}>Button ternary</Text>
        <MButton title="Button" type={MButtonVariations.ternary} />
      </View>

      <MTitle type={MTitleVariant.h5} content="Disabled state" />
      <View>
        <Text style={{ marginVertical: 20 }}>Button primary</Text>
        <MButton title="Button" type={MButtonVariations.primary} disabled />
      </View>
      <View>
        <Text style={{ marginVertical: 20 }}>Button secondary</Text>
        <MButton title="Button" type={MButtonVariations.secondary} disabled />
      </View>
      <View>
        <Text style={{ marginVertical: 20 }}>Button ternary</Text>
        <MButton title="Button" type={MButtonVariations.ternary} disabled />
      </View>
    </SafeAreaView>
  );
}
