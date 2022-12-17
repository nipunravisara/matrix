import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {MLabelVariations, MLabel} from '../../../../';

export default function LabelShowcase() {
  return (
    <SafeAreaView>
      <View>
        <Text style={{marginVertical: 20}}>l1</Text>
        <MLabel content="Label" type={MLabelVariations.l1} />
        <Text style={{marginVertical: 20}}>l2</Text>
        <MLabel content="Label" type={MLabelVariations.l2} />
        <Text style={{marginVertical: 20}}>l3</Text>
        <MLabel content="Label" type={MLabelVariations.l3} />
        <Text style={{marginVertical: 20}}>l4</Text>
        <MLabel content="Label" type={MLabelVariations.l4} />
        <Text style={{marginVertical: 20}}>l5</Text>
        <MLabel content="Label" type={MLabelVariations.l5} />
      </View>
    </SafeAreaView>
  );
}
