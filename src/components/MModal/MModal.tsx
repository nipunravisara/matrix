import React from 'react';
import {Modal, View} from 'react-native';
import {MDivider, MLabel, MLabelVariations, MText, MTextVariant} from '../..';
import {MModalStyles} from './getModalStyles';

export interface TMModal {
  title: string;
  isVisible: boolean;
  onClose: () => void;
  description?: string;
  icon?: JSX.Element;
  primaryAction?: JSX.Element;
  secondaryAction?: JSX.Element;
  modalRoundness?: number;
}

export default function MModal(props: TMModal) {
  const {icon, title, isVisible, description, primaryAction, secondaryAction} =
    props;

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View style={MModalStyles(props).centeredView}>
        <View style={MModalStyles(props).modalView}>
          {icon && icon}
          <MDivider size={30} />
          <MLabel
            content={title}
            type={MLabelVariations.l1}
            styles={{textAlign: 'center'}}
          />
          <MDivider size={8} />
          <MText
            content={description}
            type={MTextVariant.p3}
            styles={{textAlign: 'center'}}
          />
          <MDivider size={30} />
          {primaryAction && primaryAction}
          <MDivider />
          {secondaryAction && secondaryAction}
        </View>
      </View>
    </Modal>
  );
}
