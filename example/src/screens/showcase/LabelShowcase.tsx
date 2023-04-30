import React from 'react';
import {Text, View} from 'react-native';
import {MLabelVariations, MLabel, MSheet} from '../../../../';

export default function LabelShowcase() {
  return (
    <MSheet styles={{paddingTop: 50}}>
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
    </MSheet>
  );
}
