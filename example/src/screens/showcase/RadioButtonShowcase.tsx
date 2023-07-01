import React, {useState} from 'react';
import {View} from 'react-native';
import {MRadioButton, MSheet} from '../../../../';

interface Tlist {
  name: string;
  value: string;
  selected: boolean;
}

export default function RadioButtonShowcase() {
  const [list, setList] = useState<Tlist[]>([
    {name: 'One', value: 'one', selected: false},
    {name: 'Two', value: 'Two', selected: false},
  ]);

  function onPress(pressedItem: Tlist) {
    setList(
      list.map((item) =>
        item.value === pressedItem.value
          ? {...item, selected: true}
          : {...item, selected: false}
      )
    );
  }

  return (
    <MSheet styles={{paddingTop: 20}}>
      <View>
        {list.map((listItem) => (
          <MRadioButton
            key={listItem.name}
            label={listItem.name}
            selected={listItem.selected}
            onPress={() => onPress(listItem)}
          />
        ))}
      </View>
    </MSheet>
  );
}
