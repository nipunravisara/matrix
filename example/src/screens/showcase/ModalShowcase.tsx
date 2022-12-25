import React, {useState} from 'react';
import {View} from 'react-native';
import {
  MButton,
  MButtonVariations,
  MIconButton,
  MIconButtonVariations,
  MModal,
  MSheet,
} from '../../../../';

export default function ModalShowcase() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <MSheet styles={{marginTop: 20}}>
      <View>
        <MModal
          icon={
            <MIconButton
              iconName={'pause-outline'}
              type={MIconButtonVariations.Primary}
            />
          }
          title="Are you sure, Do you want to continue?"
          description="After you continue you can undo changes anytime"
          isVisible={modalVisible}
          onClose={() => setModalVisible(false)}
          primaryAction={
            <MButton
              title="Continue"
              expanded
              onPress={() => setModalVisible(false)}
            />
          }
          secondaryAction={
            <MButton
              title="Go Back"
              expanded
              type={MButtonVariations.ternary}
              onPress={() => setModalVisible(false)}
            />
          }
        />
        <MButton title="Open modal" onPress={() => setModalVisible(true)} />
      </View>
    </MSheet>
  );
}
